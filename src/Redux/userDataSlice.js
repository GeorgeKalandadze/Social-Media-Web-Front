import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "../Axios/axiosClient";

const initialData = {
  loading: false,
  user: {},
  error: "",
};

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  try {
    const response = await axiosClient.get("/user");
    console.log(response,"user")
    return response.data;
  } catch (error) {
    throw error;
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: initialData,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});


export default userSlice.reducer;
