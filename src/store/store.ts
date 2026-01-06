import { config } from '@/utils/config';
import { configureStore } from '@reduxjs/toolkit';
const store = configureStore({
  reducer: {},
  devTools: config.ENVIRONMENT === 'development',
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// export type AppStore = typeof store;
