import { createStore } from 'redux';
import { testReducers } from './reducers';
// 创建store
export let store = createStore(testReducers);
