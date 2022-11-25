import React from 'react';

interface PrivateLayoutProps {
  children: React.ReactDOM;
}

const PrivateLayout: React.FC<PrivateLayoutProps> = ({ children }) => {
  return <>{children}</>;
};

export default PrivateLayout;
