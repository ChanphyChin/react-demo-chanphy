import { combineReducers } from 'redux';
import { TEST, SAGA_TEST } from './action-types';
// 初始化state
const initState = {
  test: '1',
  sagaTest: 'this is sagaTest default message'
};
// 定义reducer
export function testReducers(state = initState, action) {
  switch (action.type) {
    case TEST:
      return Object.assign({}, state, { test: action.test });
    case SAGA_TEST:
      return Object.assign({}, state, { sagaTest: action.sagaTest });
    default:
      return state;
  }
}
// 多个reducer 可以使用 combineReducers 进行reducer的合并
