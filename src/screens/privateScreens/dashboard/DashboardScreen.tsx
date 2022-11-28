import React, { useEffect } from 'react';

const DashboardScreen: React.FC = () => {
  useEffect(() => {
    console.log('DashboardScreen.tsx - useEffect');
  }, []);

  return <>Dashboard Screen</>;
};

export default DashboardScreen;
