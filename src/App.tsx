import React from 'react';

import { Suspense } from './components';
import RootRouter from './routers/Root';

import './App.less';

const App: React.FC = () => {
  return (
    <div className="App">
      <RootRouter />
    </div>
  );
};

export const AppConfig: React.FC = () => {
  return (
    <React.Suspense fallback={<Suspense />}>
      <App />
    </React.Suspense>
  );
};

export default AppConfig;
