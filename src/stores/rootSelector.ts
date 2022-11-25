import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'src/stores';

import { reducer } from './rootReducer';

export const testSelector = createSelector(reducer, (state: RootState) => {
  return state;
});
