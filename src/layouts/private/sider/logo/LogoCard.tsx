import React from 'react';
import { LogoCardStyle } from './LogoCard.style';

const LogoCard: React.FC = () => {
  return (
    <LogoCardStyle style={{ height: 64 }} className="logo">
      LOGO
    </LogoCardStyle>
  );
};

export default LogoCard;
