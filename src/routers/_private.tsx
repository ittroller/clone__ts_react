import React from 'react';
import type { RouteObject } from 'react-router-dom';

import { ProtectedRoutes } from 'src/contexts/auth/AuthContext';
import { PrivateLayout } from 'src/layouts';

const DashboardScreen = React.lazy(
  async () => await import('src/screens/privateScreens').then(module => ({ default: module.DashboardScreen })),
);
const AccountScreen = React.lazy(
  async () => await import('src/screens/privateScreens').then(module => ({ default: module.AccountScreen })),
);

const _privateRoutes: RouteObject[] = [
  {
    element: (
      <ProtectedRoutes>
        <PrivateLayout />
      </ProtectedRoutes>
    ),
    children: [
      { path: '/dashboard', element: <DashboardScreen /> },
      { path: '/account', element: <AccountScreen /> },
    ],
  },
];

export default _privateRoutes;
