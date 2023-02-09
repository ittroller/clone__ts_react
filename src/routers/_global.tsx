import React from 'react';
import type { RouteObject } from 'react-router-dom';

import { ROUTER_PATH } from 'src/constants';
import { NotFound } from 'src/screens/NotFound';
import { LoginScreen } from 'src/screens/publicScreens';

const _globalRoutes: RouteObject[] = [
  { path: ROUTER_PATH.LOGIN.PATH, element: <LoginScreen /> },

  { path: ROUTER_PATH.NOT_FOUND.PATH, element: <NotFound /> },
];

export default _globalRoutes;
