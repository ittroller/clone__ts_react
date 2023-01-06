import { createSlice } from '@reduxjs/toolkit'; // PayloadAction

import { changeThemeAction } from './theme.action';
import { LOCAL_STORAGE_KEY } from 'src/constants';
import { checkValidTheme } from 'src/utils';

const { actions, reducer } = createSlice({
  name: 'theme_slice',
  initialState: {
    theme: checkValidTheme(localStorage.getItem(LOCAL_STORAGE_KEY.THEME) ?? ''),
    isLoading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(changeThemeAction.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(changeThemeAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.theme = action.payload;
      })
      .addCase(changeThemeAction.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export { reducer };
export default actions;
