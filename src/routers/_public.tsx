import React from 'react';
import type { RouteObject } from 'react-router-dom';

import LayoutCard from 'src/layouts/public/LayoutCard';

import { PublishedRoutes } from 'src/contexts/auth/AuthContext';
import { ROUTER_PATH } from 'src/constants';
import { AboutScreen, HomeScreen } from 'src/screens/publicScreens';

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
