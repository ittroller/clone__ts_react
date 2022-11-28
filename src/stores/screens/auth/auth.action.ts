import { createAsyncThunk } from '@reduxjs/toolkit';

import AUTH_API from './auth.api';
import { LOCAL_STORAGE_KEY } from 'src/constants';

export const loginAction = createAsyncThunk<any, Auth.LoginRequestPayload>(
  'auth',
  async ({ data, callback = () => {} }, { dispatch, rejectWithValue }) => {
    try {
      const user = await AUTH_API.loginAPI(data);

      if (user?.token && user?.refresh_token) {
        localStorage.setItem(LOCAL_STORAGE_KEY.TOKEN, user.token);
        localStorage.setItem(LOCAL_STORAGE_KEY.REFRESH_TOKEN, user.refresh_token);

        await dispatch(getMeAction());
        callback();
      }

      return user;
    } catch (err: any) {
      rejectWithValue(err?.response?.data || err?.name);
    }
  },
);

export const getMeAction = createAsyncThunk<any>('me', async (_, { dispatch, rejectWithValue }) => {
  try {
    const res = await AUTH_API.getMeAPI();

    return res;
  } catch (err: any) {
    return rejectWithValue(err);
  }
});
