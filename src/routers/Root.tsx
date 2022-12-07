import React from 'react';
import { useRoutes } from 'react-router-dom';

import { useWeb3Auth } from 'src/contexts/web3auth/Web3Auth';

const RootRouter: React.FC = () => {
  const { routers } = useWeb3Auth();

  return <>{useRoutes(routers)}</>;
};

export default RootRouter;
