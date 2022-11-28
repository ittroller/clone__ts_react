import React from 'react';
import type { RouteObject } from 'react-router-dom';

import { PublicLayout } from 'src/layouts';

const HomeScreen = React.lazy(
  async () => await import('src/screens/publicScreens').then(module => ({ default: module.HomeScreen })),
);
const AboutScreen = React.lazy(
  async () => await import('src/screens/publicScreens').then(module => ({ default: module.AboutScreen })),
);
const LoginScreen = React.lazy(
  async () => await import('src/screens/publicScreens').then(module => ({ default: module.LoginScreen })),
);

const NotFoundScreen = React.lazy(
  async () => await import('src/screens/NotFound').then(module => ({ default: module.NotFound })),
);

const _publicRoutes: RouteObject[] = [
  {
    element: <PublicLayout />,
    children: [
      { path: '/', element: <HomeScreen /> },
      { path: '/about', element: <AboutScreen /> },
    ],
  },
  {
    element: <LoginScreen />,
    path: '/login',
  },
  { element: <NotFoundScreen />, path: '*' },
];

export default _publicRoutes;
