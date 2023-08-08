import { configureStore } from '@reduxjs/toolkit'
import postModalReducer from './postModalSlice';

export const store = configureStore({
  reducer: {
    postModal: postModalReducer,
  },
})