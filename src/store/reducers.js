// import { combineReducers } from 'redux';
import {
  CLICK_COUNT,
  SOME_THING_FORM_AJAX,
  SOME_THING_FORM_AJAX_PARAMS
} from './action-types';
// 初始化state
const initState = {
  count: '1',
  ajaxData: {},
  ajaxParams: {}
};
// 定义reducer
export function reducersDemo(state = initState, action) {
  switch (action.type) {
    case CLICK_COUNT:
      return Object.assign({}, state, { count: action.count });
    case SOME_THING_FORM_AJAX:
      return Object.assign({}, state, { ajaxData: action.ajaxData });
    case SOME_THING_FORM_AJAX_PARAMS:
      return Object.assign({}, state, { ajaxParams: action.ajaxParams });
    default:
      return state;
  }
}
// 多个reducer 可以使用 combineReducers 进行reducer的合并
