import * as util from '../common/util.js';
import createElement from '../common/createElement.js';
import types from '../common/types.js';
export default createElement({
    "name": "checkbox-group",
    "desc": "多项选择器，内部由多个checkbox组成。",
    "props": [],
    "events": {
        "change": {
            "name": "change",
            "type": "change",
            "desc": "<checkbox-group/>中选中项发生改变是触发 change 事件，detail = {value:[选中的checkbox的value的数组]}",
            "bindable": true,
            "catchable": false
        }
    }
});