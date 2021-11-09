import { configureStore } from '@reduxjs/toolkit';
import playerSlice from './playerSlice';

export const store = configureStore({
  reducer: {
    player: playerSlice.reducer
  }
});