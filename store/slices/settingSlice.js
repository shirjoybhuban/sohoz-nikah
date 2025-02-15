import { createSlice } from '@reduxjs/toolkit';
import { baseUrl } from 'components/const/api';
import { settings_api } from 'components/const/endpoint';

const initialState = {
  loading: false,
  hasErrors: false,
  logo: null,
  favIcon: null,
  externalLink: false,
};

export const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    getSetting: (state) => {
      state.loading = true;
    },
    getSettingSuccess: (state, { payload }) => {
      state.logo = payload.logo;
      state.favIcon = payload.favicon;
      state.externalLink = payload.go_external ? true : false;
      state.loading = false;
      state.hasErrors = false;
    },
    getSettingFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const { getSetting, getSettingSuccess, getSettingFailure } =
  settingSlice.actions;

export const settingData = (state) => state.setting;

export default settingSlice.reducer;

export function fetchSettings() {
  return async (dispatch) => {
    const url = `${baseUrl}/${settings_api}`;
    dispatch(getSetting());
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch(getSettingSuccess(data));
    } catch (error) {
      dispatch(getSettingFailure());
    }
  };
}
