import { SafeEventEmitterProvider } from '@web3auth/base';
import Web3 from 'web3';

const ethProvider = (provider: SafeEventEmitterProvider): Web3AuthCustom.IWalletProvider => {
  const getAccounts = async (): Promise<string[] | undefined> => {
    try {
      const web3 = new Web3(provider as any);
      const accounts = await web3.eth.getAccounts();

      return accounts;
    } catch (error) {}
  };

  const getBalance = async (): Promise<any> => {
    try {
      const web3 = new Web3(provider as any);
      const accounts = await web3.eth.getAccounts();
      const balance = await web3.eth.getBalance(accounts[0]);

      return balance;
    } catch (error) {}
  };

  const getPrivateKey = async (): Promise<any> => {
    const prvKey = (await provider.request({ method: 'eth_private_key' })) as any;

    return prvKey;
  };

  const getBlock = async (timestamp): Promise<any> => {
    try {
      const web3 = new Web3(provider as any);
      const block = await web3.eth.getBlock(timestamp);

      return block;
    } catch (error) {}
  };

  return { getAccounts, getBalance, getPrivateKey, getBlock };
};

export default ethProvider;
