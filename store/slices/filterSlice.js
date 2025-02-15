import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filterModalOpen: false,
  loading: false,
  hostingType: 'null',
  price: 'null',
  ram: 'null',
  gender: 'null',
  biodataNo: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    toggleModalFilter: (state, action) => {
      state.filterModalOpen = !state.filterModalOpen;
    },
    setLoad: (state, action) => {
      state.loading = action.payload;
    },
    setHostingType: (state, action) => {
      state.hostingType = action.payload;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setBiodataNo: (state, action) => {
      state.biodataNo = action.payload;
    },
    setRam: (state, action) => {
      state.ram = action.payload;
    },
    resetFilter: (state, action) => {
      state.loading = true;
      state.hostingType = 'null';
      state.price = 'null';
      state.ram = 'null';
      state.gender = 'null';
    },
  },
});

export const {
  toggleModalFilter,
  setLoad,
  setHostingType,
  setPrice,
  setGender,
  setRam,
  resetFilter,
  setBiodataNo,
} = filterSlice.actions;

export default filterSlice.reducer;
