import React, { createContext, useContext, useState } from 'react';
import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import { ethers } from 'ethers';

import { estimateGas, rpcUrl, tokens } from './web3config';

export interface IWeb3Context {
  methodContractSend: (tokenName: string, web3?: Web3 | null) => any;
  methodContractCall: (tokenName: string, address?: string) => any;
  getGasPrice: () => any;
}

export const InitWeb3Context = createContext<IWeb3Context>({
  methodContractSend: () => {},
  methodContractCall: () => {},
  getGasPrice: () => {},
});

export default function useWeb3Context(): IWeb3Context {
  return useContext(InitWeb3Context);
}

export const DECIMAL_VALUE = 1e18;

const getGasPrice = async (): Promise<any> => {
  const web3 = new Web3(rpcUrl ?? '');
  const gasPrice = await web3.eth.getGasPrice();

  return (
    ethers.BigNumber.from(gasPrice).mul(ethers.BigNumber.from('3')).div(ethers.BigNumber.from('2')) ||
    estimateGas.gasPrice
  );
};

export const Web3ContextProvider: React.FC<any> = ({ children }: any): any => {
  // Create chainId default for project
  // Create function return rpc url from default chainId

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [chainID, setChainID] = useState<number>();

  // WRITE CONTRACT - .send
  const methodContractSend = (tokenName, web3): any => {
    if (!web3) {
      return;
    }

    return new web3.eth.Contract(tokens[tokenName].abi as AbiItem[], tokens[tokenName].address, {
      gas: estimateGas.gas,
      gasPrice: estimateGas.gasPrice,
    });
  };

  // READ CONTRACT - .call
  const methodContractCall = (tokenName, address = tokens[tokenName].address): any => {
    const web3 = new Web3(rpcUrl ?? '');

    return new web3.eth.Contract(tokens[tokenName].abi as AbiItem[], address, {});
  };

  const contextProvider: IWeb3Context = {
    methodContractSend,
    methodContractCall,
    getGasPrice,
  };

  return <InitWeb3Context.Provider value={contextProvider}>{children}</InitWeb3Context.Provider>;
};
