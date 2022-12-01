import React, { useEffect, useState } from 'react';
import { hooks, network } from 'src/configs/web3-react/connectors/network';
import CardComponent from './partials/Card';

const { useChainId, useAccounts, useIsActivating, useIsActive, useProvider, useENSNames } = hooks;

export default function NetworkCard(): React.ReactElement {
  const chainId = useChainId();
  const accounts = useAccounts();
  const isActivating = useIsActivating();

  const isActive = useIsActive();

  const provider = useProvider();
  const ENSNames = useENSNames(provider);

  const [error, setError] = useState(undefined);

  // attempt to connect eagerly on mount
  useEffect(() => {
    void network.activate().catch(() => {
      // eslint-disable-next-line no-console
      console.debug('Failed to connect to network');
    });
  }, []);

  return (
    <CardComponent
      connector={network}
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
