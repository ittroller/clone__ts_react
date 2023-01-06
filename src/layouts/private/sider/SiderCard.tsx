import React from 'react';

import { SiderCardStyle } from './SiderCard.style';
import LogoCard from './logo/LogoCard';
import MenuCard from './menu/MenuCard';

const SiderCard: React.FC = () => {
  return (
    <SiderCardStyle
      className="layout-sider"
      breakpoint="lg"
      collapsedWidth="0"
      theme="light"
      width={250}
      onBreakpoint={_ => {}}
      onCollapse={_ => {}}
    >
      <LogoCard />

      <MenuCard />
    </SiderCardStyle>
  );
};

export default SiderCard;
