import React, { useEffect, useState } from 'react';
import { useNavigate, useRoutes } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import styled from 'styled-components';

import { Spin } from 'antd';

import _publicRoutes from './_public';
import _privateRoutes from './_private';
import { LOCAL_STORAGE_KEY } from 'src/constants';
import { useAppDispatch, useAppSelector } from 'src/stores';
import { getMeAction } from 'src/stores/screens/auth/auth.action';

const RootRouter: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoading, meInfo, error } = useAppSelector(state => state.auth);
  const [routes, setRoutes] = useState<RouteObject[]>([]);

  useEffect(() => {
    const initialFunction = async (): Promise<void> => {
      await dispatch(getMeAction());
    };

    const token = localStorage.getItem(LOCAL_STORAGE_KEY.TOKEN) as string;

    if (token) {
      void initialFunction();
    } else {
      setRoutes([..._publicRoutes]);
    }
  }, []);

  useEffect(() => {
    if (error) {
      localStorage.removeItem(LOCAL_STORAGE_KEY.TOKEN);
      navigate('/login');
    } else {
      setRoutes([..._publicRoutes, ..._privateRoutes]);
    }
  }, [meInfo, error]);

  return (
    <SpinStyle spinning={isLoading} wrapperClassName="root-spin" className="root-spin-component" tip="Loading...">
      {useRoutes(routes)}
    </SpinStyle>
  );
};

export default RootRouter;

const SpinStyle = styled(Spin)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
