import React from 'react';
import { useRoutes } from 'react-router-dom';

import _publicRoutes from './_public';
import _privateRoutes from './_private';

const RootRouter: React.FC = () => {
  return <>{useRoutes([..._publicRoutes, ..._privateRoutes])}</>;
};

export default RootRouter;
