import { SafeEventEmitterProvider } from '@web3auth/base';
import ethProvider from './ethProvider';

export const getWalletProvider = (provider: SafeEventEmitterProvider): Web3AuthCustom.IWalletProvider => {
  return ethProvider(provider);
};
