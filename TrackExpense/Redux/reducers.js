import {createSlice} from '@reduxjs/toolkit';
import categoriesData from '../categoriesData';

const initialState = {
  categories: categoriesData,
  viewMode: 'chart',
  selectedCategory: null,
  showMoreToggle: false,
};

export const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setViewMode: (state, action) => {
      state.viewMode = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setShowMoreToggle: (state, action) => {
      state.showMoreToggle = action.payload;
    },
  },
});

export const {
  setCategories,
  setViewMode,
  setSelectedCategory,
  setShowMoreToggle,
} = categorySlice.actions;

export default categorySlice.reducer;
