import { combineReducers } from 'redux';

import { reducer as i18nReducer } from './i18n/i18n.reducer';
import { reducer as themeReducer } from './theme/theme.reducer';

const appReducer = combineReducers({
  i18n: i18nReducer,
  theme: themeReducer,
});

export { appReducer };
