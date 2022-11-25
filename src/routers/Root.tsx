import React from 'react';
import { useRoutes } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

import _publicRoutes from './_public';

const RootRouter: React.FC = () => {
  const rootRouters: RouteObject[] = [..._publicRoutes];

  return <>{useRoutes(rootRouters)}</>;
};

export default RootRouter;
