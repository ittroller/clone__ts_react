import React, { useEffect } from 'react';
import { useOutlet } from 'react-router-dom';

const PublicLayout: React.FC = () => {
  const outlet = useOutlet();

  useEffect(() => {
    console.log('PublicLayout.tsx - useEffect');
  }, []);

  return <div>{outlet}</div>;
};

export default PublicLayout;
