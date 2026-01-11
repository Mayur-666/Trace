import { combineReducers } from '@reduxjs/toolkit';
import searchSlice from '@/slices/searchSlice';
import algorithmSlice from '@/slices/algorithmSlice';

const rootReducer = combineReducers({
  global_search: searchSlice,
  algorithm_slice: algorithmSlice,
});

export default rootReducer;
