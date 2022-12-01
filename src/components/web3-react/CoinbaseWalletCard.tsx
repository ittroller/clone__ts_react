import React, { useEffect, useState } from 'react';
import { coinbaseWallet, hooks } from 'src/configs/web3-react/connectors/coinbaseWallet';
import CardComponent from './partials/Card';

const { useChainId, useAccounts, useIsActivating, useIsActive, useProvider, useENSNames } = hooks;

export default function CoinbaseWalletCard(): React.ReactElement {
  const chainId = useChainId();
  const accounts = useAccounts();
  const isActivating = useIsActivating();

  const isActive = useIsActive();

  const provider = useProvider();
  const ENSNames = useENSNames(provider);

  const [error, setError] = useState(undefined);

  // attempt to connect eagerly on mount
  useEffect(() => {
    void coinbaseWallet.connectEagerly().catch(() => {
      // eslint-disable-next-line no-console
      console.debug('Failed to connect eagerly to coinbase wallet');
    });
  }, []);

  return (
    <CardComponent
      connector={coinbaseWallet}
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
