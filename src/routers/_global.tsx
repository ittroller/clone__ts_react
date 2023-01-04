import React from 'react';
import type { RouteObject } from 'react-router-dom';

const LoginScreen = React.lazy(
  async () => await import('src/screens/publicScreens').then(module => ({ default: module.LoginScreen })),
);

const NotFoundScreen = React.lazy(
  async () => await import('src/screens/NotFound').then(module => ({ default: module.NotFound })),
);

const _globalRoutes: RouteObject[] = [
  { path: '*', element: <NotFoundScreen /> },
  { path: '/login', element: <LoginScreen /> },
];

export default _globalRoutes;
