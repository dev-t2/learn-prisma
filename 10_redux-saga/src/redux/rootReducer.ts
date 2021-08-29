import { combineReducers } from '@reduxjs/toolkit';
import { all, fork } from 'redux-saga/effects';

import data from './data/slice';
import dataSaga from './data/saga';

const rootReducer = combineReducers({
  data,
});

export function* rootSaga() {
  yield all([fork(dataSaga)]);
}

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
