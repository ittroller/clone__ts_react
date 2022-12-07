/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { ADAPTER_EVENTS, SafeEventEmitterProvider, WALLET_ADAPTER_TYPE, Web3AuthError } from '@web3auth/base';
import { useNavigate } from 'react-router-dom';
import { Web3Auth } from '@web3auth/web3auth';
import { OpenloginAdapter } from '@web3auth/openlogin-adapter';
import Web3 from 'web3';
import { provider as providerWeb3Core } from 'web3-core';
import { message, Spin } from 'antd';

import { CHAIN_CONFIG, getWalletProvider } from 'src/configs/web3auth';
import _publicRoutes from 'src/routers/_public';
import _privateRoutes from 'src/routers/_private';
// import { useAppDispatch } from 'src/stores';
// import actions from 'src/stores/common/web3auth/web3auth.reducer';

export const Web3AuthContext = createContext<Web3AuthCustom.Context>({
  web3: null,
  web3Auth: null,
  provider: {
    instance: null,
    loading: false,
  },
  login: async (adapter: WALLET_ADAPTER_TYPE, provider?: Web3AuthCustom.SocialNetWork, loginHint?: string) => {},
  logout: async () => {},
  getUserInfo: async () => {},
  getAccounts: async () => {},
  getBalance: async () => {},
  getPrivateKey: async () => {},
  getBlock: async () => {},
  routers: [],
});

export function useWeb3Auth(): Web3AuthCustom.Context {
  return useContext(Web3AuthContext);
}

const Web3AuthProvider: React.FC<Web3AuthCustom.Provider> = ({ children }: Web3AuthCustom.Provider): any => {
  const [web3AuthNetwork, setWeb3AuthNetwork] = useState<Web3AuthCustom.WEB3AUTH_NETWORK_TYPE>('mainnet');
  const [chain, setChain] = useState<Web3AuthCustom.CHAIN_CONFIG_TYPE>('mainnet');

  // const dispatch = useAppDispatch();

  const [web3, setWeb3] = useState<Web3 | null>(null);
  const [web3Auth, setWeb3Auth] = useState<Web3Auth | null>(null);
  const [provider, setProvider] = useState<{
    instance: Web3AuthCustom.IWalletProvider | null;
    loading: boolean;
  }>({
    instance: null,
    loading: true,
  });
  const navigate = useNavigate();

  const setWalletProvider = useCallback(
    (web3authProvider: SafeEventEmitterProvider) => {
      const walletProvider = getWalletProvider(web3authProvider);

      setProvider({ instance: walletProvider, loading: false });
    },
    [chain],
  );

  useEffect(() => {
    const subscribeAuthEvents = (web3auth: Web3Auth): void => {
      web3auth.on(ADAPTER_EVENTS.ADAPTER_DATA_UPDATED, (data: unknown) => {
        void message.destroy();
        void message.success('Adapter data updated');
      });

      web3auth.on(ADAPTER_EVENTS.NOT_READY, (data: unknown) => {
        void message.destroy();
        void message.success('Not Ready');
      });

      web3auth.on(ADAPTER_EVENTS.READY, (data: unknown) => {
        void message.destroy();
        void message.success('Ready');
      });

      web3auth.on(ADAPTER_EVENTS.CONNECTED, (data: unknown) => {
        void message.destroy();
        void message.success('Connected');

        setWalletProvider(web3auth?.provider as SafeEventEmitterProvider);
        setWeb3(new Web3(web3auth?.provider as providerWeb3Core));
      });

      web3auth.on(ADAPTER_EVENTS.CONNECTING, () => {
        void message.destroy();
        void message.info('Connecting');
      });

      web3auth.on(ADAPTER_EVENTS.DISCONNECTED, () => {
        void message.destroy();
        void message.warn('Disconnected');
      });

      web3auth.on(ADAPTER_EVENTS.ERRORED, (error: any) => {
        void message.destroy();
        void message.error(`Error connect: ${error?.message as string}`);
      });
    };

    const currentChainConfig = CHAIN_CONFIG[chain];

    async function init(): Promise<void> {
      try {
        const clientId: string = process.env.REACT_APP_WEB3AUTH_CLIENT_ID ?? '';

        const web3AuthInstance = new Web3Auth({
          chainConfig: currentChainConfig,
          enableLogging: !(!process.env.NODE_ENV || process.env.NODE_ENV === 'development'),
          clientId,
          storageKey: 'session',
        });

        subscribeAuthEvents(web3AuthInstance);

        const adapter = new OpenloginAdapter({
          chainConfig: currentChainConfig,
          adapterSettings: {
            network: web3AuthNetwork,
            clientId,
          },
        });

        web3AuthInstance.configureAdapter(adapter);

        await web3AuthInstance.init().catch(error => {
          throw error;
        });

        await setWeb3Auth(web3AuthInstance);

        if (!web3AuthInstance.provider) {
          throw Error('Not get web3auth provider.');
        }
      } catch (error: any) {
        await setProvider({ ...provider, loading: false });
      }
    }

    void init();
  }, [chain, web3AuthNetwork]);

  const routers = useMemo(() => {
    if (provider.instance) {
      const newPublicRoutes = _publicRoutes.filter(item => item.path !== 'login');
      return [...newPublicRoutes, ..._privateRoutes];
    }

    return [..._publicRoutes];
  }, [provider.instance]);

  const login = async (
    adapter: WALLET_ADAPTER_TYPE,
    loginProvider: Web3AuthCustom.SocialNetWork,
    loginHint?: string,
  ): Promise<void> => {
    if (!web3Auth) {
      return;
    }

    try {
      const provider = await web3Auth
        .connectTo(adapter, {
          loginProvider,
          login_hint: loginHint,
        })
        .catch(err => {
          throw err;
        });

      const currentProvider: Web3AuthCustom.IWalletProvider = getWalletProvider(provider as SafeEventEmitterProvider);
      setProvider({ instance: currentProvider, loading: false });

      navigate('/dashboard');
    } catch (error) {
      if ((error?.message as string).length) {
        void message.destroy();
        void message.error(`${error?.message as string}. Please don't close popup wallet login.`);
      }
    }
  };

  const logout = async (): Promise<void> => {
    try {
      if (!web3Auth) {
        return;
      }

      await setProvider({ ...provider, loading: true });

      await web3Auth.logout();

      await setWeb3(null);

      await setProvider({ ...provider, loading: false });
      navigate('/login');
    } catch (error) {
      await setProvider({ ...provider, loading: false });

      if (error?.message) {
        void message.destroy();
        void message.error(error?.message);
      }
    }
  };

  const getUserInfo = async (): Promise<any> => {
    if (!web3Auth) {
      return;
    }

    return await web3Auth.getUserInfo();
  };

  const getAccounts = async (): Promise<any> => {
    if (!provider) {
      return;
    }

    const accounts = await provider.instance?.getAccounts();

    return accounts;
  };

  const getBalance = async (): Promise<any> => {
    if (!provider) {
      return;
    }

    const balance = await provider.instance?.getBalance();

    return balance;
  };

  const getPrivateKey = async (): Promise<any> => {
    if (!web3Auth) {
      return;
    }

    const walletProvider = getWalletProvider(web3Auth.provider as SafeEventEmitterProvider);

    const prvKey = await walletProvider.getPrivateKey();

    return prvKey;
  };

  const getBlock = async (timestamp): Promise<any> => {
    if (!provider) {
      return;
    }

    const data = await provider.instance?.getBlock(timestamp);
    return data;
  };

  const contextProvider = {
    web3,
    web3Auth,
    provider,
    login,
    logout,
    getUserInfo,
    getAccounts,
    getBalance,
    getPrivateKey,
    getBlock,
    routers,
  };

  return (
    <Web3AuthContext.Provider value={contextProvider}>
      <Spin wrapperClassName="root-spin" spinning={provider.loading}>
        {children}
      </Spin>
    </Web3AuthContext.Provider>
  );
};

export default Web3AuthProvider;
