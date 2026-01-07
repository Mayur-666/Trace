import { GLOBAL_SEARCH } from '@/utils/constants';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  query: '',
  results: [],
  isLoading: false,
};

const searchSlice = createSlice({
  name: GLOBAL_SEARCH,
  initialState,
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
    setResults(state, action) {
      state.results = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    resetSearch(state) {
      state.query = '';
      state.results = [];
      state.isLoading = false;
    },
  },
});

export const { setQuery } = searchSlice.actions;

export default searchSlice.reducer;
