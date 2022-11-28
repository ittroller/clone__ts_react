import React, { useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

import _publicRoutes from './_public';
import _privateRoutes from './_private';

const RootRouter: React.FC = () => {
  const rootRouters: RouteObject[] = [..._publicRoutes, ..._privateRoutes];

  useEffect(() => {
    console.log('Root.tsx - useEffect');
  }, []);

  return <>{useRoutes(rootRouters)}</>;
};

export default RootRouter;
