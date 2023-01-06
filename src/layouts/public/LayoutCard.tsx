import React from 'react';

import BodyCard from './body/BodyCard';

import { LayoutCardStyle } from './LayoutCard.style';

const PublicLayout: React.FC = () => {
  return (
    <LayoutCardStyle>
      <BodyCard />
    </LayoutCardStyle>
  );
};

export default PublicLayout;
