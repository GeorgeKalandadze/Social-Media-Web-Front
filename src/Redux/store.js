import { configureStore } from '@reduxjs/toolkit';
import postModalReducer from './postModalSlice';
import dataReducer from './postDataSlice';
import userDataReducer from './userDataSlice';
import postSlice from './posts';

export const store = configureStore({
  reducer: {
    postModal: postModalReducer,
    postData: dataReducer,
    user: userDataReducer,
    posts: postSlice
   
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});