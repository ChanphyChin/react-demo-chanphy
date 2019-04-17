import { TEST } from './action-types';
// 定义action创建函数
export function addTest(test) {
  return {
    type: TEST,
    test
  }
}
