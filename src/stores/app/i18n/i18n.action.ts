import { createAsyncThunk } from '@reduxjs/toolkit';

import { I18n } from 'src/configs/i18n/i18n';

export const changeLanguage = createAsyncThunk<any, string>(
  'i18n_action',
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      void I18n.changeLanguage(payload);
      return payload;
    } catch (err: any) {
      rejectWithValue(err.response.data);
    }
  },
);
