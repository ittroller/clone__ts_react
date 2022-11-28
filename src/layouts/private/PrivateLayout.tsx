import React, { useEffect } from 'react';
import { useOutlet } from 'react-router-dom';

const PrivateLayout: React.FC = () => {
  const outlet = useOutlet();

  useEffect(() => {
    console.log('PrivateLayout.tsx - useEffect');
  }, []);

  return <div>{outlet}</div>;
};

export default PrivateLayout;
