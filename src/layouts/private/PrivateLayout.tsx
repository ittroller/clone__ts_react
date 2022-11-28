import React from 'react';
import { useOutlet } from 'react-router-dom';

const PrivateLayout: React.FC = () => {
  const outlet = useOutlet();

  return <div>{outlet}</div>;
};

export default PrivateLayout;
