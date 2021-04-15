import {
  CLICK_COUNT,
  SOME_THING_FORM_AJAX,
  SOME_THING_FORM_AJAX_PARAMS
} from './action-types';
// 定义action创建函数
export function onButtonClick(count) {
  return {
    type: CLICK_COUNT,
    count
  };
}

export function setAjaxParams(ajaxParams) {
  return {
    type: SOME_THING_FORM_AJAX_PARAMS,
    ajaxParams
  };
}

export function getAjaxData(ajaxData) {
  return {
    type: SOME_THING_FORM_AJAX,
    ajaxData
  };
}
