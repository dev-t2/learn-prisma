import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './rootReducer';

const store = configureStore({
  devTools: process.env.NODE_ENV === 'development',
  reducer: rootReducer,
});

if (process.env.NODE_ENV === 'development' && (module as any).hot) {
  (module as any).hot.accept(() => {
    store.replaceReducer(rootReducer);
  });
}

export default store;
