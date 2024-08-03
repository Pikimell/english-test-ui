import { configureStore } from '@reduxjs/toolkit';
import categorySlice from './categories/categorySlice.js';

export const store = configureStore({
  reducer: {
    categories: categorySlice,
  },
});
