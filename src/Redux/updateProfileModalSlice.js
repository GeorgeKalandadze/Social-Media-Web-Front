import { createSlice } from '@reduxjs/toolkit';

const updateProfileModalSlice = createSlice({
  name: "updateProfileModal",
  initialState: {
    isOpenUpdateProfileModal: false,
  },
  reducers: {
    openUpdateProfielModal: (state) => {
      state.isOpenUpdateProfileModal = true;
    },
    closeUpdateProfileModal: (state) => {
      state.isOpenUpdateProfileModal = false;
    },
  },
});

export const { openUpdateProfielModal, closeUpdateProfileModal } = updateProfileModalSlice.actions;
export default updateProfileModalSlice.reducer;
