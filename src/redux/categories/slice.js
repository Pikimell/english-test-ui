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
  extraReducers: builder => {
    builder
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchCategories.pending, handlePending)
      .addCase(fetchCategories.rejected, handleRejected);
  },
});

export default categorySlice.reducer;
