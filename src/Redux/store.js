import { configureStore } from '@reduxjs/toolkit';
import postModalReducer from './postModalSlice';
import dataReducer from './postDataSlice';

export const store = configureStore({
  reducer: {
    postModal: postModalReducer,
    postData: dataReducer,
  },
})