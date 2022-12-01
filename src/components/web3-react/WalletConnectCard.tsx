import { URI_AVAILABLE } from '@web3-react/walletconnect';
import React, { useEffect, useState } from 'react';
import { hooks, walletConnect } from 'src/configs/web3-react/connectors/walletConnect';
import CardComponent from './partials/Card';

const { useChainId, useAccounts, useIsActivating, useIsActive, useProvider, useENSNames } = hooks;

export default function WalletConnectCard(): React.ReactElement {
  const chainId = useChainId();
  const accounts = useAccounts();
  const isActivating = useIsActivating();

  const isActive = useIsActive();

  const provider = useProvider();
  const ENSNames = useENSNames(provider);

  const [error, setError] = useState(undefined);

  // log URI when available
  useEffect(() => {
    walletConnect?.events?.on(URI_AVAILABLE, (uri: string) => {
      // eslint-disable-next-line no-console
      console.log(`uri: ${uri}`);
    });
  }, []);

  // attempt to connect eagerly on mount
  useEffect(() => {
    walletConnect.connectEagerly().catch(() => {
      // eslint-disable-next-line no-console
      console.debug('Failed to connect eagerly to walletconnect');
    });
  }, []);

  return (
    <CardComponent
      connector={walletConnect}
      chainId={chainId}
      isActivating={isActivating}
      isActive={isActive}
      error={error}
      setError={setError}
      accounts={accounts}
      provider={provider}
      ENSNames={ENSNames}
    />
  );
}
