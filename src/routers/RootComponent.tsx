import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { PublicLayout, PrivateLayout } from 'src/layouts';
import ProtectedRouter from './CheckAuth';

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

const DashboardScreen = React.lazy(
  async () => await import('src/screens/privateScreens').then(module => ({ default: module.DashboardScreen })),
);
const AccountScreen = React.lazy(
  async () => await import('src/screens/privateScreens').then(module => ({ default: module.AccountScreen })),
);

const RootRouter: React.FC = () => {
  return (
    <Routes>
      <Route
        element={
          <ProtectedRouter>
            <PrivateLayout />
          </ProtectedRouter>
        }
      >
        <Route path={'/dashboard'} element={<DashboardScreen />} />
        <Route path={'/account'} element={<AccountScreen />} />
      </Route>

      <Route element={<PublicLayout />}>
        <Route path={'/'} element={<HomeScreen />} />
        <Route path={'/about'} element={<AboutScreen />} />
        <Route path={'/login'} element={<LoginScreen />} />
        <Route path={'*'} element={<NotFoundScreen />} />
      </Route>
    </Routes>
  );
};

export default RootRouter;
