import { configureStore } from '@reduxjs/toolkit';
import postModalReducer from './postModalSlice';
import dataReducer from './postDataSlice';
import userDataReducer from './userDataSlice';
import postSlice from './posts';
import selectedPostSlice from './selectedPostDataSlice';
import favoritedPostsSlice from './favoritedPostsSlice';
import notificationModalSlice from './notificationModalSlice';


export const store = configureStore({
  reducer: {
    postModal: postModalReducer,
    postData: dataReducer,
    user: userDataReducer,
    posts: postSlice,
    selectedPostData: selectedPostSlice,
    favoritePosts: favoritedPostsSlice,
    notificationModal: notificationModalSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});