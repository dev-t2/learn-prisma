import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootReducer, { rootSaga } from './rootReducer';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  devTools: process.env.NODE_ENV === 'development',
  middleware: [sagaMiddleware],
  reducer: rootReducer,
});

sagaMiddleware.run(rootSaga);

if (process.env.NODE_ENV === 'development' && (module as any).hot) {
  (module as any).hot.accept(() => {
    store.replaceReducer(rootReducer);
  });
}

export default store;
