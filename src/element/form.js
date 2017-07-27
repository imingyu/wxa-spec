import * as util from '../common/util.js';
import createElement from '../common/createElement.js';
import types from '../common/types.js';
export default createElement({
    "name": "form",
    "desc": "当点击 <form/> 表单中 formType 为 submit 的 <button/> 组件时，会将表单组件中的 value 值进行提交，需要在表单组件中加上 name 来作为 key。",
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
            "desc": "",
            "bindable": true,
            "catchable": false
        },
        "reset": {
            "name": "reset",
            "type": "reset",
            "desc": "",
            "bindable": true,
            "catchable": false
        }
    }
});