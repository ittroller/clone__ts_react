import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import { AuthProvider } from 'src/contexts/auth/AuthContext';

import _publicRoutes from './_public';
import _privateRoutes from './_private';
import _globalRoutes from './_global';

import useLanguage from 'src/hooks/useLanguage/useLanguage';

const CreateBrowserRouter: React.FC = () => {
  useLanguage();

  const router = createBrowserRouter([..._publicRoutes, ..._privateRoutes, ..._globalRoutes]);

  return <RouterProvider router={router} />;
};

export default CreateBrowserRouter;
