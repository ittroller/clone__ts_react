import { createAsyncThunk } from '@reduxjs/toolkit';

import { LOCAL_STORAGE_KEY } from 'src/constants';

export const changeThemeAction = createAsyncThunk<any, string>(
  'theme_action',
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY.THEME, payload);

      return payload;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  },
);
