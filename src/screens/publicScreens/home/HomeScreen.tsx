import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { getName } from 'src/utils';
import { Divider } from 'antd';
import MetaMaskCard from 'src/components/web3-react/MetamaskCard';

const HomeScreen: React.FC = () => {
  const { connector } = useWeb3React();

  // eslint-disable-next-line no-console
  console.log(`Connector is: ${getName(connector) as string}`);

  return (
    <div>
      <h1>Home Screen</h1>
      <Divider />

      <MetaMaskCard />
    </div>
  );
};

export default HomeScreen;
