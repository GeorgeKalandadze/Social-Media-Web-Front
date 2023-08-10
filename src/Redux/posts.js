import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosClient from '../Axios/axiosClient';


const initialData = {
    loading:false,
    posts: [],
    error: ""
}

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const response = await axiosClient.get("/posts");
   
    return response.data;
  } catch (error) {
    throw error;
  }
});

const postsSlice = createSlice({
  name: "posts",
  initialState: initialData,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer