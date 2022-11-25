import { configureStore } from '@reduxjs/toolkit';

import { reducer } from './rootReducer';

export const store = configureStore({ reducer });
