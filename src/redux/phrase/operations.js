import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPhrases = createAsyncThunk(
  'phrases/fetchPhrases',
  async (categoryId, thunkAPI) => {
    try {
      const params = { categoryId };
      const response = await axios.get('/phrases', { params });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
