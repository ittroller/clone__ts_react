import { combineReducers } from 'redux';

import { reducer as i18nReducer } from './i18n/i18n.reducer';

const appReducer = combineReducers({
  i18n: i18nReducer,
});

export { appReducer };
