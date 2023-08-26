import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    updateNotifications: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { updateNotifications } = notificationsSlice.actions;
export default notificationsSlice.reducer;
