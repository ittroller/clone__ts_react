import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import { I18nextProvider } from 'react-i18next';
import { I18n } from 'src/configs/i18n/i18n';

import { Provider } from 'react-redux';
import { store } from 'src/stores';

import { Suspense } from './components';

import RootRouter from './routers/Root';

import './App.less';

import { Web3ReactProvider, Web3ReactHooks, initializeConnector } from '@web3-react/core';
import { MetaMask } from '@web3-react/metamask';

export const [metaMask, hooks] = initializeConnector<MetaMask>(actions => new MetaMask({ actions }));

const connectors: Array<[MetaMask, Web3ReactHooks]> = [[metaMask, hooks]];

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={I18n}>
        <React.Suspense fallback={<Suspense />}>
          <BrowserRouter>
            <Web3ReactProvider connectors={connectors}>
              <RootRouter />
            </Web3ReactProvider>
          </BrowserRouter>
        </React.Suspense>
      </I18nextProvider>
    </Provider>
  );
};

export default React.memo(App);
