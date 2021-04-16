import {
  CLICK_COUNT,
  SOME_THING_FORM_AJAX,
  SOME_THING_FORM_AJAX_PARAMS
} from '../store/action-types';
import { put, all, takeEvery, select, call, take } from 'redux-saga/effects';

function apiFn(params) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve({ page: 1, pageSize: 10, list: [], params });
    }, 2000);
  });
}

const buttonClickCallback = () => {
  console.log('after button click');
};

export function* buttonClick() {
  yield take(CLICK_COUNT, buttonClickCallback);
}

export function* getSomeThingFromAjax() {
  const state = yield select();
  const data = yield call(apiFn, state.ajaxParams);
  yield put({ type: SOME_THING_FORM_AJAX, ajaxData: data });
}

export function* setAjaxParams() {
  yield takeEvery(SOME_THING_FORM_AJAX_PARAMS, getSomeThingFromAjax);
}

export function* rootSage() {
  yield all([buttonClick(), setAjaxParams()]);
}
