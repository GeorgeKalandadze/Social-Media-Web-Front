import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  body: '',
  sub_category_id: '',
  images:[]
};

const dataSlice = createSlice({
  name: 'postData',
  initialState,
  reducers: {
    updateData: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateData } = dataSlice.actions;
export default dataSlice.reducer;