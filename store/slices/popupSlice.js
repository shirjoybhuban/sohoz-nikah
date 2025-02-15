import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  popupModalOpen: false,
};

export const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    toggleModalPopup: (state, action) => {
      state.popupModalOpen = !state.popupModalOpen;
    },
  },
});

export const { toggleModalPopup } = popupSlice.actions;

export default popupSlice.reducer;
