import React from 'react';
import { useRoutes } from 'react-router-dom';

import { AuthProvider } from 'src/contexts/auth/AuthContext';

import _publicRoutes from './_public';
import _privateRoutes from './_private';
import _globalRoutes from './_global';

import useLanguage from 'src/hooks/useLanguage/useLanguage';

const RootRouter: React.FC = () => {
  useLanguage();

  return <AuthProvider>{useRoutes([..._publicRoutes, ..._privateRoutes, ..._globalRoutes])}</AuthProvider>;
};

export default RootRouter;
