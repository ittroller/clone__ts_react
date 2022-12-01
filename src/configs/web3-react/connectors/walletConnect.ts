import { initializeConnector } from '@web3-react/core';
import { WalletConnect } from '@web3-react/walletconnect';

// "@walletconnect/ethereum-provider": "1.7.1", REQUIRED

import { URLS } from 'src/utils';

export const [walletConnect, hooks] = initializeConnector<WalletConnect>(
  actions =>
    new WalletConnect({
      actions,
      options: {
        rpc: URLS,
      },
    }),
);
