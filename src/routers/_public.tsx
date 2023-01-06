import React from 'react';
import type { RouteObject } from 'react-router-dom';

import LayoutCard from 'src/layouts/public/LayoutCard';

import { PublishedRoutes } from 'src/contexts/auth/AuthContext';
import { ROUTER_PATH } from 'src/constants';

const HomeScreen = React.lazy(
  async () => await import('src/screens/publicScreens').then(module => ({ default: module.HomeScreen })),
);
const AboutScreen = React.lazy(
  async () => await import('src/screens/publicScreens').then(module => ({ default: module.AboutScreen })),
);

const _publicRoutes: RouteObject[] = [
  {
    element: (
      <PublishedRoutes>
        <LayoutCard />
      </PublishedRoutes>
    ),

    children: [
      { path: ROUTER_PATH.HOME.PATH, element: <HomeScreen /> },
      { path: ROUTER_PATH.ABOUT.PATH, element: <AboutScreen /> },
    ],
  },
];

export default _publicRoutes;
