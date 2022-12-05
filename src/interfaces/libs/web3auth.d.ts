declare namespace Web3AuthCustom {
  export const WEB3AUTH_NETWORK = {
    mainnet: { displayName: 'Mainnet' },
    testnet: { displayName: 'Testnet' },
    cyan: { displayName: 'Cyan' },
  } as const;

  export interface IWalletProvider {
    getAccounts: () => Promise<any>;
    getBalance: () => Promise<any>;
    getPrivateKey: () => Promise<any>;
    getBlock: (timestamp: string | number) => Promise<any>;
    // getTransaction: (transactionObject: any) => Promise<any>;
  }

  export type SocialNetWork = 'google' | 'email_passwordless' | 'facebook' | 'twitter' | 'discord';

  export type CHAIN_CONFIG_TYPE = keyof typeof import('src/configs/web3auth/chainConfig').CHAIN_CONFIG;
  export type WEB3AUTH_NETWORK_TYPE = keyof typeof WEB3AUTH_NETWORK;

  export interface Context {
    web3: import('web3').Web3 | null;
    web3Auth: import('@web3auth/web3auth').Web3Auth | null;
    provider: {
      instance: Web3AuthCustom.IWalletProvider | null;
      loading: boolean;
    };
    login: (
      adapter: import('@web3auth/base').WALLET_ADAPTER_TYPE,
      provider: SocialNetWork,
      login_hint?: string,
    ) => Promise<void>;
    logout: () => Promise<void>;
    getUserInfo: () => Promise<any>;
    getAccounts: () => Promise<any>;
    getBalance: () => Promise<any>;
    getPrivateKey: () => Promise<any>;
    getBlock: (timestamp: string) => Promise<any>;
  }

  export interface Provider {
    web3AuthNetwork?: WEB3AUTH_NETWORK_TYPE;
    chain?: CHAIN_CONFIG_TYPE;
    children?: import('react').React.ReactNode;
  }

  export interface ChainConfig {
    mainnet: import('@web3auth/base').CustomChainConfig;
    solana: import('@web3auth/base').CustomChainConfig;
    polygon: import('@web3auth/base').CustomChainConfig;
    testnet: import('@web3auth/base').CustomChainConfig;
  }
}
