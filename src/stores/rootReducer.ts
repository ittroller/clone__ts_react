import { combineReducers } from '@reduxjs/toolkit';

import { appReducer } from 'src/stores/app';

import { reducer as authReducer } from './screens/auth/auth.reducer';

export const reducer = combineReducers({
  app: appReducer,

  auth: authReducer,
});
