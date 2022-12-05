import { CHAIN_NAMESPACES } from '@web3auth/base';

export const CHAIN_CONFIG: Web3AuthCustom.ChainConfig = {
  mainnet: {
    displayName: 'Ethereum Mainnet',
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    chainId: '0x5',
    rpcTarget: 'https://goerli.infura.io/v3/aa3c869fb8044352a1c6a13f265cb257',
    blockExplorer: 'https://goerli.etherscan.io/',
    ticker: 'ETH',
    tickerName: 'Ethereum',
  },
  solana: {
    chainNamespace: CHAIN_NAMESPACES.SOLANA,
    rpcTarget: 'https://api.mainnet-beta.solana.com',
    blockExplorer: 'https://explorer.solana.com/',
    chainId: '0x1',
    displayName: 'Solana Mainnet',
    ticker: 'SOL',
    tickerName: 'Solana',
  },
  polygon: {
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    rpcTarget: 'https://polygon-rpc.com',
    blockExplorer: 'https://polygonscan.com/',
    chainId: '0x89',
    displayName: 'Polygon Mainnet',
    ticker: 'matic',
    tickerName: 'Matic',
  },
  testnet: {
    displayName: 'Ethereum Testnet',
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    chainId: '0x4',
    rpcTarget: 'https://rpc.ankr.com/eth_rinkeby', // https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161
    blockExplorer: 'https://rinkeby.etherscan.io/',
    ticker: 'ETH',
    tickerName: 'Ethereum',
  },
} as const;
