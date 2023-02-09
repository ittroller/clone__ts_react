import React from 'react';

// import { BrowserRouter } from 'react-router-dom';

import { I18nextProvider } from 'react-i18next';
import { I18n } from 'src/configs/i18n/i18n';

import { Provider } from 'react-redux';
import { store } from 'src/stores';

// import { Suspense } from './components';

// import RootRouter from './routers/Root';

import './App.less';
import './configs/theme/light.less';
import './configs/theme/dark.less';

import { ThemeProvider } from './contexts/theme/ThemeContext';
import CreateBrowserRouter from './routers/Root';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={I18n}>
        <ThemeProvider>
          <CreateBrowserRouter />
        </ThemeProvider>
      </I18nextProvider>
    </Provider>
  );
};

export default React.memo(App);
