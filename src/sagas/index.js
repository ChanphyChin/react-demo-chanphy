import { TEST } from '../store/action-types';
import { put, all, takeEvery } from 'redux-saga/effects';

function incrementAsync() {
  // console.log('incrementAsync');
}
export function* test() {
  yield takeEvery(TEST, incrementAsync);
}

export function* rootSage() {
  yield all([test()]);
}
