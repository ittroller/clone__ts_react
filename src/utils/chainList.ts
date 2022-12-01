import type { AddEthereumChainParameter, Connector } from '@web3-react/types';
import { MetaMask } from '@web3-react/metamask';
import { Network } from '@web3-react/network';
import { WalletConnect } from '@web3-react/walletconnect';
import { CoinbaseWallet } from '@web3-react/coinbase-wallet';

export function getName(connector: Connector): string | unknown {
  if (connector instanceof MetaMask) return 'MetaMask';
  if (connector instanceof Network) return 'Network';
  if (connector instanceof WalletConnect) return 'WalletConnect';
  if (connector instanceof CoinbaseWallet) return 'Coinbase Wallet';
  return 'Unknown';
}

const ETH: AddEthereumChainParameter['nativeCurrency'] = {
  name: 'Ether',
  symbol: 'ETH',
  decimals: 18,
};

const MATIC: AddEthereumChainParameter['nativeCurrency'] = {
  name: 'Matic',
  symbol: 'MATIC',
  decimals: 18,
};

const CELO: AddEthereumChainParameter['nativeCurrency'] = {
  name: 'Celo',
  symbol: 'CELO',
  decimals: 18,
};

interface BasicChainInformation {
  urls: string[];
  name: string;
}

interface ExtendedChainInformation extends BasicChainInformation {
  nativeCurrency: AddEthereumChainParameter['nativeCurrency'];
  blockExplorerUrls: AddEthereumChainParameter['blockExplorerUrls'];
}

function isExtendedChainInformation(
  chainInformation: BasicChainInformation | ExtendedChainInformation,
): chainInformation is ExtendedChainInformation {
  return !!(chainInformation as ExtendedChainInformation).nativeCurrency;
}

export function getAddChainParameters(chainId: number): AddEthereumChainParameter | number {
  const chainInformation = CHAINS[chainId];
  if (isExtendedChainInformation(chainInformation)) {
    return {
      chainId,
      chainName: chainInformation.name,
      nativeCurrency: chainInformation.nativeCurrency,
      rpcUrls: chainInformation.urls,
      blockExplorerUrls: chainInformation.blockExplorerUrls,
    };
  } else {
    return chainId;
  }
}

const getUrlFromKey = (url: string): string => {
  if (url) {
    return `${url}${process.env.REACT_APP_RPC_INFURA_KEY}`;
  }
  return '';
};

export const CHAINS: { [chainId: number]: BasicChainInformation | ExtendedChainInformation } = {
  1: {
    urls: [getUrlFromKey('https://mainnet.infura.io/v3/'), 'https://cloudflare-eth.com'].filter(url => url !== ''),
    name: 'Mainnet',
  },
  3: {
    urls: [getUrlFromKey('https://ropsten.infura.io/v3/')].filter(url => url !== ''),
    name: 'Ropsten',
  },
  4: {
    urls: [getUrlFromKey('https://rinkeby.infura.io/v3/')].filter(url => url !== ''),
    name: 'Rinkeby',
  },
  5: {
    urls: [getUrlFromKey('https://goerli.infura.io/v3/')].filter(url => url !== ''),
    name: 'Görli',
  },
  42: {
    urls: [getUrlFromKey('https://kovan.infura.io/v3/')].filter(url => url !== ''),
    name: 'Kovan',
  },
  // Optimism
  // 10: {
  //   urls: [
  //     process.env.REACT_APP_RPC_INFURA_KEY
  //       ? `https://optimism-mainnet.infura.io/v3/${process.env.REACT_APP_RPC_INFURA_KEY}`
  //       : '',
  //     'https://mainnet.optimism.io',
  //   ].filter(url => url !== ''),
  //   name: 'Optimism',
  //   nativeCurrency: ETH,
  //   blockExplorerUrls: ['https://optimistic.etherscan.io'],
  // },
  69: {
    urls: [getUrlFromKey('https://kovan.infura.io/v3/')].filter(url => url !== ''),
    name: 'Optimism Kovan',
    nativeCurrency: ETH,
    blockExplorerUrls: ['https://kovan.etherscan.io'],
  },
  // Arbitrum
  42161: {
    urls: ['https://rpc.ankr.com/arbitrum'].filter(url => url !== ''),
    name: 'Arbitrum One',
    nativeCurrency: ETH,
    blockExplorerUrls: ['https://arbiscan.io'],
  },
  // 421611: {
  //   urls: [
  //     process.env.REACT_APP_RPC_INFURA_KEY
  //       ? `https://arbitrum-rinkeby.infura.io/v3/${process.env.REACT_APP_RPC_INFURA_KEY}`
  //       : '',
  //     'https://rinkeby.arbitrum.io/rpc',
  //   ].filter(url => url !== ''),
  //   name: 'Arbitrum Testnet',
  //   nativeCurrency: ETH,
  //   blockExplorerUrls: ['https://testnet.arbiscan.io'],
  // },
  // Polygon
  137: {
    urls: ['https://polygon-rpc.com', 'https://matic-mainnet.chainstacklabs.com'].filter(url => url !== ''),
    name: 'Polygon Mainnet',
    nativeCurrency: MATIC,
    blockExplorerUrls: ['https://explorer.matic.network', 'https://explorer.matic.network'],
  },
  80001: {
    urls: ['https://rpc-mumbai.maticvigil.com'].filter(url => url !== ''),
    name: 'Polygon Mumbai',
    nativeCurrency: MATIC,
    blockExplorerUrls: ['https://mumbai.polygonscan.com'],
  },
  // Celo
  42220: {
    urls: ['https://rpc.ankr.com/celo'],
    name: 'Celo',
    nativeCurrency: CELO,
    blockExplorerUrls: ['https://celoscan.com'],
  },
  // 44787: {
  //   urls: ['https://alfajores-forno.celo-testnet.org'],
  //   name: 'Celo Alfajores',
  //   nativeCurrency: CELO,
  //   blockExplorerUrls: ['https://alfajores-blockscout.celo-testnet.org'],
  // },
};

export const URLS: { [chainId: number]: string[] } = Object.keys(CHAINS).reduce<{ [chainId: number]: string[] }>(
  (accumulator, chainId) => {
    const validURLs: string[] = CHAINS[Number(chainId)].urls;

    if (validURLs.length) {
      accumulator[Number(chainId)] = validURLs;
    }

    return accumulator;
  },
  {},
);
