import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosClient from '../Axios/axiosClient';


const initialData = {
  loading: false,
  favoritePosts: [],
  error: "",
};

export const fetchFavoritedPosts = createAsyncThunk("posts/fetchFavoritedPosts", async () => {
  try {
    const response = await axiosClient.get("/favorites");
    console.log(response.data.data, "resssss");
    return response.data.data;
    
  } catch (error) {
    throw error;
  }
});

const favoritePostsSlice = createSlice({
  name: "favoritePosts",
  initialState: initialData,
  reducers: {
    removeFavoritePost: (state, action) => {
      state.favoritePosts = state.favoritePosts.filter(
        (post) => post.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavoritedPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFavoritedPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.favoritePosts = action.payload;
      })
      .addCase(fetchFavoritedPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { removeFavoritePost } = favoritePostsSlice.actions

export default favoritePostsSlice.reducer;