import React, { useMemo } from 'react';
import { useRoutes } from 'react-router-dom';

import _publicRoutes from './_public';
import _privateRoutes from './_private';
import { useWeb3Auth } from 'src/contexts/web3auth/Web3Auth';
import { Spin } from 'antd';

const RootRouter: React.FC = () => {
  const { provider } = useWeb3Auth();

  const routers = useMemo(() => {
    if (provider.instance) {
      const newPublicRoutes = _publicRoutes.filter(item => item.path !== 'login');
      return [...newPublicRoutes, ..._privateRoutes];
    }

    return [..._publicRoutes];
  }, [provider]);

  return (
    <Spin wrapperClassName="root-spin" spinning={provider.loading}>
      {useRoutes(routers)}
    </Spin>
  );
};

export default RootRouter;
