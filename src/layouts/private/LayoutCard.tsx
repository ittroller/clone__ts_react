import React from 'react';

import SiderCard from './sider/SiderCard';
import BodyCard from './body/BodyCard';

import { LayoutCardStyle } from './LayoutCard.style';

const LayoutCard: React.FC = () => {
  return (
    <LayoutCardStyle>
      <SiderCard />

      <BodyCard />
    </LayoutCardStyle>
  );
};

export default LayoutCard;
