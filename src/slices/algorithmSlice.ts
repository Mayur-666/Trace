import { ALGORITHM_SLICE } from '@/utils/constants';
import type { AlgorithmData } from '@/utils/types';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface AlgorithmInput {
  name: 'STRING' | 'NUMBER';
  value: number | string;
}

interface AlgorithmSlice {
  algorithm: AlgorithmData | null;
  input: AlgorithmInput[];
  isRunning: boolean;
  error: string | null;
  currentState: number;
}

const initialState: AlgorithmSlice = {
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
    setAlgorithm(state, action: PayloadAction<AlgorithmSlice['algorithm']>) {
      state.algorithm = action.payload;
    },
    setIsRunning(state, action: PayloadAction<AlgorithmSlice['isRunning']>) {
      state.isRunning = action.payload;
    },
    setError(state, action: PayloadAction<AlgorithmSlice['error']>) {
      state.isRunning = false;
      state.currentState = 0;
      state.error = action.payload;
    },
    setCurrentState(
      state,
      action: PayloadAction<AlgorithmSlice['currentState']>,
    ) {
      state.currentState = action.payload;
    },
    resetCurrentProgress(
      state,
      action: PayloadAction<AlgorithmSlice['input']>,
    ) {
      state.currentState = 0;
      state.error = null;
      state.input = action.payload;
      state.isRunning = false;
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
