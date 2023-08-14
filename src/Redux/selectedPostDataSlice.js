import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  
};

const selectedPostSlice = createSlice({
  name: "selectedPostData",
  initialState,
  reducers: {
    updateSelectPost: (state, action) => {
      return { ...state, ...action.payload };
    },
    clearSelectPost: () => {
      return {};
    },
  },
});

export const { updateSelectPost, clearSelectPost } = selectedPostSlice.actions;
export default selectedPostSlice.reducer;
