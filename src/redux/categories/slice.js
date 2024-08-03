import { createSlice } from '@reduxjs/toolkit';
import { fetchCategories } from './operations.js';
const initialState = {
  items: [],
  isLoading: false,
  error: null,
};
const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
export const categorySlice = createSlice({
  name: 'categories',
  initialState,
  extraReducers: {
    [fetchCategories.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchCategories.pending]: handlePending,
    [fetchCategories.rejected]: handleRejected,
  },
});

export default categorySlice.reducer;
