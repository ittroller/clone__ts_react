import React, { useCallback, useState } from 'react';
import type { Web3ReactHooks } from '@web3-react/core';
import type { MetaMask } from '@web3-react/metamask';
import { Network } from '@web3-react/network';
import { WalletConnect } from '@web3-react/walletconnect';
import { CoinbaseWallet } from '@web3-react/coinbase-wallet';

import { CHAINS, getAddChainParameters, URLS } from 'src/utils';
import { Button, Select } from 'antd';

function ChainSelect({
  chainId,
  switchChain,
  displayDefault,
  chainIds,
}: {
  chainId?: number;
  switchChain?: (chainId: number) => any;
  displayDefault: boolean;
  chainIds: number[];
}): any {
  const chainListOptions =
    chainIds.map(chainId => {
      return { value: chainId, label: CHAINS[chainId]?.name ?? chainId };
    }) || [];

  const options: Array<{
    value: number | string | string[] | number[];
    label: string;
  }> = displayDefault ? [{ value: -1, label: 'Default Chain' }, ...chainListOptions] : chainListOptions;

  return (
    <>
      <Select
        value={chainId}
        disabled={switchChain === undefined}
        options={options}
        onChange={val => {
          switchChain?.(Number(val));
        }}
      />
    </>
  );
}

export function ConnectWithSelect({
  connector,
  chainId,
  isActivating,
  isActive,
  error,
  setError,
}: {
  connector: MetaMask | WalletConnect | CoinbaseWallet | Network;
  chainId: ReturnType<Web3ReactHooks['useChainId']>;
  isActivating: ReturnType<Web3ReactHooks['useIsActivating']>;
  isActive: ReturnType<Web3ReactHooks['useIsActive']>;
  error: Error | undefined;
  setError: (error: Error | undefined) => void;
}): any {
  const isNetwork = connector instanceof Network;
  const displayDefault = !isNetwork;
  const chainIds = (isNetwork ? Object.keys(URLS) : Object.keys(CHAINS)).map(chainId => Number(chainId));

  const [desiredChainId, setDesiredChainId] = useState<number>(isNetwork ? 1 : -1);

  const switchChain = useCallback(
    (desiredChainId: number) => {
      setDesiredChainId(desiredChainId);
      // if we're already connected to the desired chain, return
      if (desiredChainId === chainId) {
        setError(undefined);
        return;
      }

      // if they want to connect to the default chain and we're already connected, return
      if (desiredChainId === -1 && chainId !== undefined) {
        setError(undefined);
        return;
      }

      if (connector instanceof WalletConnect || connector instanceof Network) {
        connector
          .activate(desiredChainId === -1 ? undefined : desiredChainId)
          .then(() => setError(undefined))
          .catch(err => {
            setError(err);
          });
      } else {
        connector
          .activate(desiredChainId === -1 ? undefined : getAddChainParameters(desiredChainId))
          .then(() => setError(undefined))
          .catch(setError);
      }
    },
    [connector, chainId, setError],
  );

  const onClick = useCallback((): void => {
    setError(undefined);
    if (connector instanceof WalletConnect || connector instanceof Network) {
      connector
        .activate(desiredChainId === -1 ? undefined : desiredChainId)
        .then(() => setError(undefined))
        .catch(setError);
    } else {
      connector
        .activate(desiredChainId === -1 ? undefined : getAddChainParameters(desiredChainId))
        .then(() => setError(undefined))
        .catch(setError);
    }
  }, [connector, desiredChainId, setError]);

  const clickConnect = (): void => {
    if (connector instanceof WalletConnect || connector instanceof Network) {
      connector
        .activate(desiredChainId === -1 ? undefined : desiredChainId)
        .then(() => setError(undefined))
        .catch(setError);
    } else {
      connector
        .activate(desiredChainId === -1 ? undefined : getAddChainParameters(desiredChainId))
        .then(() => setError(undefined))
        .catch(setError);
    }
  };

  if (error) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <ChainSelect
          chainId={desiredChainId}
          switchChain={switchChain}
          displayDefault={displayDefault}
          chainIds={chainIds}
        />
        <div style={{ marginBottom: '1rem' }} />
        <Button type="primary" danger onClick={onClick}>
          Try Again?
        </Button>
      </div>
    );
  } else if (isActive) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <ChainSelect
          chainId={desiredChainId === -1 ? -1 : chainId}
          switchChain={switchChain}
          displayDefault={displayDefault}
          chainIds={chainIds}
        />
        <div style={{ marginBottom: '1rem' }} />
        <Button
          type="primary"
          onClick={() => {
            if (connector?.deactivate) {
              void connector.deactivate();
            } else {
              void connector.resetState();
            }
          }}
        >
          Disconnect
        </Button>
      </div>
    );
  } else {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <ChainSelect
          chainId={desiredChainId}
          switchChain={isActivating ? undefined : switchChain}
          displayDefault={displayDefault}
          chainIds={chainIds}
        />

        <div style={{ marginBottom: '1rem' }} />
        <Button type="ghost" onClick={clickConnect} disabled={isActivating}>
          Connect
        </Button>
      </div>
    );
  }
}
