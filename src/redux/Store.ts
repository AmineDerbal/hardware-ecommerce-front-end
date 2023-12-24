import { configureStore } from '@reduxjs/toolkit';
import toggleReducer from './toggle/toggleSlice';

const store = configureStore({
  reducer: {
    toggle: toggleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>; // Define and export RootState type
export default store;
