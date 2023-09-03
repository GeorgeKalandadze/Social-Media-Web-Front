import { createSlice } from '@reduxjs/toolkit';

const notificationModalSlice = createSlice({
  name: "notificationModal",
  initialState: {
    isNotificationModal: false,
  },
  reducers: {
    openNotificationModal: (state) => {
      state.isNotificationModal = true;
    },
    closeNotificationModal: (state) => {
      state.isNotificationModal = false;
    },
  },
});

export const { openNotificationModal, closeNotificationModal } =
  notificationModalSlice.actions;
export default notificationModalSlice.reducer;
