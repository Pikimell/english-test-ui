import { createSlice } from '@reduxjs/toolkit';
import { fetchPhrases } from './operations.js';
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

export const phrasesSlice = createSlice({
  name: 'phrases',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchPhrases.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchPhrases.pending, handlePending)
      .addCase(fetchPhrases.rejected, handleRejected);
  },
});

export default phrasesSlice.reducer;
