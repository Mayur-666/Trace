import { combineReducers } from '@reduxjs/toolkit';
import searchSlice from '@/slices/searchSlice';

const rootReducer = combineReducers({
  global_search: searchSlice,
});

export default rootReducer;
