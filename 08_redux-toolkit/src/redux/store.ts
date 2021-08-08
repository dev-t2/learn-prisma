import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './rootReducer';

const store = configureStore({
  devTools: process.env.NODE_ENV === 'development',
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;

export default store;
