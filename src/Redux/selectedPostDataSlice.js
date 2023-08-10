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
  },
});

export const { updateSelectPost } = selectedPostSlice.actions;
export default selectedPostSlice.reducer;
