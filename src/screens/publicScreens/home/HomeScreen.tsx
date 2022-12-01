import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { Col, Divider, Row, Typography } from 'antd';
import styled from 'styled-components';

import MetaMaskCard from 'src/components/web3-react/MetamaskCard';
import WalletConnectCard from 'src/components/web3-react/WalletConnectCard';
import CoinbaseWalletCard from 'src/components/web3-react/CoinbaseWalletCard';
import NetworkCard from 'src/components/web3-react/NetworkCard';

import { getName } from 'src/utils';

const { Title } = Typography;

const HomeScreen: React.FC = () => {
  const { connector } = useWeb3React();

  // eslint-disable-next-line no-console
  console.log(`Connector is: ${getName(connector) as string}`);

  return (
    <HomeScreenStyle className="screens">
      <Title className="title" level={1}>
        Home Screen
      </Title>

      <Divider />

      <Row>
        <Col span={8}>
          <MetaMaskCard />
        </Col>
        <Col span={8}>
          <WalletConnectCard />
        </Col>
        <Col span={8}>
          <CoinbaseWalletCard />
        </Col>
        <Col span={8}>
          <NetworkCard />
        </Col>
      </Row>
    </HomeScreenStyle>
  );
};

export default HomeScreen;

const HomeScreenStyle = styled.div`
  .title {
    margin-bottom: initial;
    text-align: center;
  }
`;
