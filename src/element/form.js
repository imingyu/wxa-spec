import * as util from '../common/util.js';
import createElement from './createElement.js';
import types from '../common/types.js';
export default createElement({
    "name": "form",
    "desc": "表单，将组件内的用户输入的<switch/> <input/> <checkbox/> <slider/> <radio/> <picker/> 提交。",
    "props": [{
        "name": "report-submit",
        "type": types.Boolean,
        "default": "是否返回 formId 用于发送模板消息",
        "desc": ""
    }],
    "events": {
        "submit": {
            "name": "submit",
            "type": "submit",
            "bindable": true,
            "catchable": false
        },
        "reset": {
            "name": "reset",
            "type": "reset",
            "bindable": true,
            "catchable": false
        }
    }
});