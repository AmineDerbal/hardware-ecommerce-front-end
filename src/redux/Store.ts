import { configureStore } from '@reduxjs/toolkit';
import toggleReducer from './toggle/toggleSlice';
import userReducer from './user/userSlice';

const store = configureStore({
  reducer: {
    toggle: toggleReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>; // Define and export RootState type
export type AppDispatch = typeof store.dispatch;
export default store;
