import { configureStore } from '@reduxjs/toolkit';
import { strapiApi } from './api/strapiApi';
import uiReducer from './features/uiSlice';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    [strapiApi.reducerPath]: strapiApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(strapiApi.middleware),
});

// TS types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
