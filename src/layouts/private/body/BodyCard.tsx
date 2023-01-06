import React from 'react';
import { Layout } from 'antd';
import { useOutlet } from 'react-router-dom';

import { BodyCardStyle } from './BodyCard.style';
import HeaderCard from './header/HeaderCard';

const { Content, Footer } = Layout;

const BodyCard: React.FC = () => {
  const outlet = useOutlet();

  return (
    <BodyCardStyle className="layout-body">
      <HeaderCard />

      <Content className="body-content">{outlet}</Content>

      <Footer className="body-footer">MINH.CK</Footer>
    </BodyCardStyle>
  );
};

export default BodyCard;
