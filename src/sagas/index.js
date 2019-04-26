import { TEST, SAGA_TEST } from '../store/action-types';
import { put, all, takeEvery, takeLatest } from 'redux-saga/effects';

function* incrementAsync() {
  yield put({
    type: SAGA_TEST,
    sagaTest: 'now sagaTest change to this message'
  });
}
export function* test() {
  yield takeLatest(TEST, incrementAsync);
}

export function* rootSage() {
  console.log('hello saga');
  yield all([test()]);
}
