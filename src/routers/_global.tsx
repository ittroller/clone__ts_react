import React from 'react';
import type { RouteObject } from 'react-router-dom';

import { ROUTER_PATH } from 'src/constants';

const LoginScreen = React.lazy(
  async () => await import('src/screens/publicScreens').then(module => ({ default: module.LoginScreen })),
);

const NotFoundScreen = React.lazy(
  async () => await import('src/screens/NotFound').then(module => ({ default: module.NotFound })),
);

const _globalRoutes: RouteObject[] = [
  { path: ROUTER_PATH.LOGIN.PATH, element: <LoginScreen /> },

  { path: ROUTER_PATH.NOT_FOUND.PATH, element: <NotFoundScreen /> },
];

export default _globalRoutes;
