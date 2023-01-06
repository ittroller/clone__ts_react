import React from 'react';
import type { RouteObject } from 'react-router-dom';

import LayoutCard from 'src/layouts/private/LayoutCard';

import { ProtectedRoutes } from 'src/contexts/auth/AuthContext';
import { ROUTER_PATH } from 'src/constants';

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
        <LayoutCard />
      </ProtectedRoutes>
    ),
    children: [
      { path: ROUTER_PATH.DASHBOARD.PATH, element: <DashboardScreen /> },
      { path: ROUTER_PATH.ACCOUNT.PATH, element: <AccountScreen /> },
    ],
  },
];

export default _privateRoutes;
