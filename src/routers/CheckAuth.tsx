import { Navigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'src/stores';
import { getMeAction } from 'src/stores/screens/auth/auth.action';

import React, { useEffect } from 'react';
import { Spin } from 'antd';

interface UseAuth {
  isLoading: boolean | null;
  meInfo: Auth.MeInfo | null;
  error: any;
}

const useAuth = (): UseAuth => {
  const dispatch = useAppDispatch();

  const { isLoading, meInfo, error } = useAppSelector(state => state.auth);

  useEffect(() => {
    const initialFunction = async (): Promise<void> => {
      await dispatch(getMeAction());
    };

    void initialFunction();
  }, []);

  return { meInfo, isLoading, error };
};

const ProtectedRouter: React.FC<any> = ({ children }): any => {
  const { meInfo, isLoading, error } = useAuth();

  return (
    <Spin wrapperClassName="root-spin" spinning={!!isLoading}>
      {meInfo ? children : error && <Navigate to="/login" />}
    </Spin>
  );
};

export default ProtectedRouter;
