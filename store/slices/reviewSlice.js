import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  reviewModalOpen: false,
};

export const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    toggleModalReview: (state, action) => {
      state.reviewModalOpen = !state.reviewModalOpen;
    },
  },
});

export const { toggleModalReview } = reviewSlice.actions;

export default reviewSlice.reducer;
