import { combineReducers } from 'redux';
import { TEST } from './action-types';
// 初始化state
const initState = {
  test: '1'
}
// 定义reducer
export function testReducers(state = initState, action) {
  switch (action.type) {
    case TEST:
      return Object.assign({}, state, {test: action.test});
    default:
      return state
  }
}
// 多个reducer 可以使用 combineReducers 进行reducer的合并
