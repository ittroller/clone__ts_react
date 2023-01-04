import React from 'react';
import { useRoutes } from 'react-router-dom';

import { AuthProvider } from 'src/contexts/auth/AuthContext';

import _publicRoutes from './_public';
import _privateRoutes from './_private';
import _globalRoutes from './_global';

const RootRouter: React.FC = () => {
  return <AuthProvider>{useRoutes([..._publicRoutes, ..._privateRoutes, ..._globalRoutes])}</AuthProvider>;
};

export default RootRouter;
