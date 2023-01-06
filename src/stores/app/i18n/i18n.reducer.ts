import { createSlice } from '@reduxjs/toolkit'; // PayloadAction

import { changeLanguageAction } from './i18n.action';

const { actions, reducer } = createSlice({
  name: 'i18n_slice',
  initialState: {
    language: 'en',
    isLoading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(changeLanguageAction.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(changeLanguageAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.language = action.payload;
      })
      .addCase(changeLanguageAction.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export { reducer };
export default actions;
