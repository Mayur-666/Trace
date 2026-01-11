import { ALGORITHM_SLICE } from '@/utils/constants';
import type { AlgorithmData } from '@/utils/types';
import { createSlice } from '@reduxjs/toolkit';

interface AlgorithmSlice<T extends string | number> {
  algorithm: AlgorithmData | null;
  input: T[];
  isRunning: boolean;
  error: string | null;
  currentState: number;
}

const initialState: AlgorithmSlice<number> = {
  algorithm: null,
  input: [],
  isRunning: false,
  error: null,
  currentState: 0,
};

const algorithmSlice = createSlice({
  name: ALGORITHM_SLICE,
  initialState,
  reducers: {
    setAlgorithm(state, action) {
      state.algorithm = action.payload;
    },
    setIsRunning(state, action) {
      state.isRunning = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setCurrentState(state, action) {
      state.currentState = action.payload;
    },
    resetAlgorithmState(state) {
      state.algorithm = initialState.algorithm;
      state.currentState = initialState.currentState;
      state.error = initialState.error;
      state.isRunning = initialState.isRunning;
    },
  },
});

export default algorithmSlice.reducer;
