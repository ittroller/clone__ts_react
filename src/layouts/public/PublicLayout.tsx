import React from 'react';
import { useOutlet } from 'react-router-dom';

const PublicLayout: React.FC = () => {
  const outlet = useOutlet();

  return <div>{outlet}</div>;
};

export default PublicLayout;
