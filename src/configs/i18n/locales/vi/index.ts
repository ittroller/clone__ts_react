import * as publicLocale from './public';
import * as privateLocale from './private';

import global from './global.json';

const vi = { ...publicLocale, ...privateLocale, global };

export { vi };
