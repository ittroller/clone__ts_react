import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { LOCAL_STORAGE_KEY } from 'src/constants';
import { useAppDispatch, useAppSelector } from 'src/stores';
import { getMeAction } from 'src/stores/screens/auth/auth.action';

import { AboutScreen, HomeScreen, LoginScreen } from 'src/screens/publicScreens';
import { NotFound } from 'src/screens/NotFound';
import { AccountScreen, DashboardScreen } from 'src/screens/privateScreens';

export const ROUTER_PATH = {
  LOGIN: { KEY: 'LOGIN', isAuth: false, PATH: '/login', screen: <LoginScreen />, ROLE: ['admin', 'user'] },

  HOME: { KEY: 'HOME', isAuth: false, PATH: '/', screen: <HomeScreen />, ROLE: ['user'] },
  ABOUT: { KEY: 'ABOUT', isAuth: false, PATH: '/about', screen: <AboutScreen />, ROLE: ['user'] },

  DASHBOARD: { KEY: 'DASHBOARD', isAuth: true, PATH: '/dashboard', screen: <DashboardScreen />, ROLE: ['admin'] },
  ACCOUNT: { KEY: 'ACCOUNT', isAuth: true, PATH: '/account', screen: <AccountScreen />, ROLE: ['admin'] },

  NOT_FOUND: { KEY: 'NOT_FOUND', isAuth: false, PATH: '*', screen: <NotFound />, ROLE: ['admin', 'user'] },
};

// export const ROUTER_PATH = {
//   ...AUTH_ROUTER_PATH,
//   ...GLOBAL_ROUTER_PATH,
//   ...PRIVATE_ROUTER_PATH,
//   ...PUBLIC_ROUTER_PATH,
// };

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }): React.ReactElement => {
  const location = useLocation();
  const dispatch = useAppDispatch();

  const roles = ['admin', 'user'];
  const { meInfo, isLoading, error } = useAppSelector(state => state.auth);

  useEffect(() => {
    const localToken: string = localStorage.getItem(LOCAL_STORAGE_KEY.TOKEN) ?? '';

    if (localToken && !meInfo) {
      void dispatch(getMeAction());
    }
  }, []);

  if (isLoading) {
    return <p className="container">Checking auth..</p>;
  }

  if (!meInfo || error) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  const userHasRequiredRole = meInfo && roles.includes(meInfo?.role?.toString() as string);
  if (meInfo && !userHasRequiredRole) {
    return <Navigate to="*" state={{ from: location }} />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
