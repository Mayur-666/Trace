import { GLOBAL_SEARCH } from '@/utils/constants';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface SearchSlice {
  query: string;
  isLoading: false;
}

const initialState: SearchSlice = {
  query: '',
  isLoading: false,
};

const searchSlice = createSlice({
  name: GLOBAL_SEARCH,
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<SearchSlice['query']>) {
      state.query = action.payload;
    },
    setIsLoading(state, action: PayloadAction<SearchSlice['isLoading']>) {
      state.isLoading = action.payload;
    },
    resetSearch(state) {
      state.query = '';
      state.isLoading = false;
    },
  },
});

export const { setQuery } = searchSlice.actions;

export default searchSlice.reducer;
