import React, { useEffect } from 'react';
import { Spin } from 'antd';
import { Navigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'src/stores';
import { LOCAL_STORAGE_KEY, ROUTER_PATH } from 'src/constants';
import { getMeAction } from 'src/stores/screens/auth/auth.action';

interface IAuthContext {
  isLoading: boolean;
  error: any;
  meInfo: any;
}

const AuthContext = React.createContext<IAuthContext>({
  isLoading: false,
  error: null,
  meInfo: null,
});

export const useAuth = (): IAuthContext => {
  return React.useContext(AuthContext);
};

export const AuthProvider = ({ children }: { children: React.ReactNode }): React.ReactElement<IAuthContext> => {
  const dispatch = useAppDispatch();
  const { meInfo, isLoading, error } = useAppSelector(state => state.auth);

  useEffect(() => {
    const localToken: string = localStorage.getItem(LOCAL_STORAGE_KEY.TOKEN) ?? '';

    if (localToken && !meInfo) {
      void dispatch(getMeAction());
    }
  }, []);

  const value = { meInfo, isLoading, error };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const ProtectedRoutes: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isLoading, meInfo, error } = useAuth();
  const localToken: string = localStorage.getItem(LOCAL_STORAGE_KEY.TOKEN) ?? '';

  return (
    <Spin wrapperClassName="root-spin" spinning={isLoading}>
      {localToken ? (
        meInfo ? (
          children
        ) : error ? (
          <Navigate to={ROUTER_PATH.LOGIN.PATH} replace={true} />
        ) : null
      ) : (
        <Navigate to={ROUTER_PATH.LOGIN.PATH} replace={true} />
      )}
    </Spin>
  );
};

export const PublishedRoutes: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isLoading, meInfo } = useAuth();

  return (
    <Spin wrapperClassName="root-spin" spinning={isLoading}>
      {meInfo ? <Navigate to={ROUTER_PATH.DASHBOARD.PATH} replace={true} /> : children}
    </Spin>
  );
};
