import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "../Axios/axiosClient";

const initialState = {
  loading: false,
  error: null,
  notifications: [],
};

export const fetchNotifications = createAsyncThunk(
  "notifications/fetchNotifications",
  async () => {
    try {
      const response = await axiosClient.get("/notifications");
      console.log(response.data.data, "response");
      return response.data.data
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    updateNotifications: (state, action) => {
      state.notifications.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotifications.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNotifications.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action);
        state.notifications = action.payload;
      })
      .addCase(fetchNotifications.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { updateNotifications } = notificationsSlice.actions;
export default notificationsSlice.reducer;
