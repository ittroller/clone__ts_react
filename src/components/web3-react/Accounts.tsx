import type { BigNumber } from '@ethersproject/bignumber';
import { formatEther } from '@ethersproject/units';
import type { Web3ReactHooks } from '@web3-react/core';
import React, { useEffect, useState } from 'react';

function useBalances(
  provider?: ReturnType<Web3ReactHooks['useProvider']>,
  accounts?: string[],
): BigNumber[] | undefined {
  const [balances, setBalances] = useState<BigNumber[] | undefined>();

  useEffect(() => {
    if (provider && accounts?.length) {
      let stale = false;

      void Promise.all(accounts.map(async account => await provider.getBalance(account))).then(balances => {
        if (stale) return;
        setBalances(balances);
      });

      return () => {
        stale = true;
        setBalances(undefined);
      };
    }
  }, [provider, accounts]);

  return balances;
}

export function Accounts({
  accounts,
  provider,
  ENSNames,
}: {
  accounts: ReturnType<Web3ReactHooks['useAccounts']>;
  provider: ReturnType<Web3ReactHooks['useProvider']>;
  ENSNames: ReturnType<Web3ReactHooks['useENSNames']>;
}): any {
  const balances = useBalances(provider, accounts);

  if (accounts === undefined) return null;

  const renderFunction = (): React.ReactNode => {
    if (accounts.length) {
      return accounts?.map((account, i) => (
        <ul key={account} style={{ margin: 0, overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {ENSNames?.[i] ?? account}
          {balances?.[i] ? ` (Ξ${formatEther(balances[i])})` : null}
        </ul>
      ));
    }

    return 'None';
  };

  return (
    <div>
      Accounts: <b>{renderFunction()}</b>
    </div>
  );
}
