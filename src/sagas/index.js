import { TEST, SAGA_TEST } from '../store/action-types';
import { put, all, takeEvery, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

function apiFn(path) {
  return new Promise((resolve, reject) => {
    axios
      .get(path)
      .then(res => {
        resolve(res.data.result);
      })
      .catch(err => {
        reject(err);
      });
  });
}

function* incrementAsync() {
  const result = yield call(apiFn, '/getResult');
  yield put({ type: SAGA_TEST, sagaTest: result });
}

export function* test() {
  yield takeEvery(TEST, incrementAsync);
}

export function* rootSage() {
  console.log('hello saga');
  yield all([test()]);
}
