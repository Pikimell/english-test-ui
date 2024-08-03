import { configureStore } from '@reduxjs/toolkit';
import categorySlice from './categories/slice.js';
import phrasesSlice from './phrase/slice.js';

export const store = configureStore({
  reducer: {
    categories: categorySlice,
    phrases: phrasesSlice,
  },
});
