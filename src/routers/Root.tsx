import React, { useMemo } from 'react';
import { useRoutes } from 'react-router-dom';

import _publicRoutes from './_public';
import _privateRoutes from './_private';
import { useWeb3Auth } from 'src/contexts/web3auth/Web3Auth';
import { Suspense } from 'src/components';

const RootRouter: React.FC = () => {
  const { provider } = useWeb3Auth();

  const renderUI = useMemo(() => {
    if (!provider.loading) {
      if (provider.instance) {
        const newPublicRoutes = _publicRoutes.filter(item => item.path !== 'login');
        return <>{useRoutes([...newPublicRoutes, ..._privateRoutes])}</>;
      }

      return <>{useRoutes([..._publicRoutes])}</>;
    }

    return <Suspense />;
  }, [provider]);

  return <>{renderUI}</>;
};

export default RootRouter;

// const SpinStyle = styled(Spin)`
//   height: 100%;
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
