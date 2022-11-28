import React from 'react';
import type { RouteObject } from 'react-router-dom';

import { PrivateLayout } from 'src/layouts';

const DashboardScreen = React.lazy(
  async () => await import('src/screens/privateScreens').then(module => ({ default: module.DashboardScreen })),
);

const NotFoundScreen = React.lazy(
  async () => await import('src/screens/NotFound').then(module => ({ default: module.NotFound })),
);

const _privateRoutes: RouteObject[] = [
  {
    element: <PrivateLayout />,
    children: [
      { path: '/', element: <DashboardScreen /> },
      { element: <NotFoundScreen />, path: '*' },
    ],
  },
];

export default _privateRoutes;
