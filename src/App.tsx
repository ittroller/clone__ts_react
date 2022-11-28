import React from 'react';

/* ROUTER */
import { BrowserRouter } from 'react-router-dom';

/* I18N */
import { I18nextProvider } from 'react-i18next';
import { I18n } from 'src/configs/i18n/i18n';

/* REDUX TOOLKIT */
import { Provider } from 'react-redux';
import { store } from 'src/stores';

/* LAZY LOAD */
import { Suspense } from './components';

/* ROUTER */
import RootRouter from './routers/Root';

import './App.less';

const App: React.FC = () => {
  console.log();
  return <RootRouter />;
};

export const AppConfig: React.FC = () => {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={I18n}>
        <React.Suspense fallback={<Suspense />}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </React.Suspense>
      </I18nextProvider>
    </Provider>
  );
};

export default AppConfig;
