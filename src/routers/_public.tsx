import React from 'react';
import type { RouteObject } from 'react-router-dom';
import { PublishedRoutes } from 'src/contexts/auth/AuthContext';

import { PublicLayout } from 'src/layouts';

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
        <PublicLayout />
      </PublishedRoutes>
    ),

    children: [
      { path: '/', element: <HomeScreen /> },
      { path: '/about', element: <AboutScreen /> },
    ],
  },
];

export default _publicRoutes;
