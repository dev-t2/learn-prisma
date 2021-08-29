import { all, fork, put, takeLatest } from 'redux-saga/effects';

import { getDataFailure, getDataRequest, getDataSuccess } from './slice';

// const getDataApi = () => {};

function* getData() {
  try {
    // const result = yield call(getDataApi);

    yield put(getDataSuccess());
  } catch (e) {
    yield put(getDataFailure());
  }
}

function* watchGetData() {
  yield takeLatest(getDataRequest.type, getData);
}

export default function* dataSaga() {
  yield all([fork(watchGetData)]);
}
