import { createSlice } from '@reduxjs/toolkit';

const postModalSlice = createSlice({
  name: 'postModal',
  initialState: {
    isOpen: false,
  },
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = postModalSlice.actions;
export default postModalSlice.reducer;
