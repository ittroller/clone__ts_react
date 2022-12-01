import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import { I18nextProvider } from 'react-i18next';
import { I18n } from 'src/configs/i18n/i18n';

import { Provider } from 'react-redux';
import { store } from 'src/stores';

import { Suspense } from './components';

import RootRouter from './routers/Root';

import { Web3ReactProvider } from '@web3-react/core';
import { connectors } from 'src/configs/web3-react';
import { Web3ContextProvider } from 'src/contexts/web3/web3';

import './App.less';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={I18n}>
        <React.Suspense fallback={<Suspense />}>
          <BrowserRouter>
            <Web3ReactProvider connectors={connectors}>
              <Web3ContextProvider>
                <RootRouter />
              </Web3ContextProvider>
            </Web3ReactProvider>
          </BrowserRouter>
        </React.Suspense>
      </I18nextProvider>
    </Provider>
  );
};

export default React.memo(App);
