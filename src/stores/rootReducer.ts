import { combineReducers } from '@reduxjs/toolkit';

import { appReducer } from 'src/stores/app';

export const reducer = combineReducers({
  app: appReducer,
});
