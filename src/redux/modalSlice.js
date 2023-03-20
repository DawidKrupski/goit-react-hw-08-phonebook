import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalOpen: false,
  openContact: {
    id: '',
    name: 'i',
    number: 'o',
  },
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleModalAction: state => {
      state.isModalOpen = !state.isModalOpen;
    },
    setOpenContactAction: (state, action) => {
      state.openContact = action.payload;
    },
    editOpenContactAction: (state, action) => {
      const { name, value } = action.payload;
      state.openContact[name] = value;
    },
  },
});

export const {
  toggleModalAction,
  setOpenContactAction,
  editOpenContactAction,
} = modalSlice.actions;

export const modalReducer = modalSlice.reducer;
