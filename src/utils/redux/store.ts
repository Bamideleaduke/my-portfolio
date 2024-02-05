// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import colorModeReducer from './features/colorModeSlice';

export const store = configureStore({
  reducer: {
    colorMode: colorModeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
