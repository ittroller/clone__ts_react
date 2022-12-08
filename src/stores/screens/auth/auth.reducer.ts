import { createSlice } from '@reduxjs/toolkit';
import { loginAction, getMeAction } from './auth.action';

const initialState: Auth.LoginState = {
  isLoading: false,
  error: null,
  meInfo: null,
};

const { actions, reducer } = createSlice({
  name: 'auth_slice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loginAction.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      })

      .addCase(getMeAction.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getMeAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.meInfo = action.payload;
      })
      .addCase(getMeAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export { reducer };
export default actions;
