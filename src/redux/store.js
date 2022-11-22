import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './Modules/Auth';

export const store = configureStore({
  reducer: {
    AuthReducer: AuthReducer,
  },
})