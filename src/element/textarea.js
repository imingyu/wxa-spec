import * as util from '../common/util.js';
import createElement from '../common/createElement.js';
import types from '../common/types.js';
export default createElement({
    "name": "textarea",
    "desc": "多行输入框。",
    "props": [{
        "name": "value",
        "type": types.String,
        "desc": "输入框的内容"
    }, {
        "name": "placeholder",
        "type": types.String,
        "desc": "输入框为空时占位符"
    }, {
        "name": "placeholder-style",
        "type": types.String,
        "desc": "指定 placeholder 的样式"
    }, {
        "name": "placeholder-class",
        "type": types.String,
        "default": "textarea-placeholder",
        "desc": "指定 placeholder 的样式类"
    }, {
        "name": "disabled",
        "type": types.Boolean,
        "default": false,
        "desc": "是否禁用"
    }, {
        "name": "maxlength",
        "type": types.Number,
        "default": 140,
        "desc": "最大输入长度，设置为 -1 的时候不限制最大长度"
    }, {
        "name": "auto-focus",
        "type": types.Boolean,
        "default": false,
        "desc": "自动聚焦，拉起键盘。"
    }, {
        "name": "focus",
        "type": types.Boolean,
        "default": false,
        "desc": "获取焦点"
    }, {
        "name": "auto-height",
        "type": types.Boolean,
        "default": false,
        "desc": "是否自动增高，设置auto-height时，style.height不生效"
    }, {
        "name": "fixed",
        "type": types.Boolean,
        "default": false,
        "desc": "如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true"
    }, {
        "name": "cursor-spacing",
        "type": types.Number,
        "default": 0,
        "desc": "指定光标与键盘的距离，单位 px 。取 textarea 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离"
    }],
    "events": {
        "focus": {
            "name": "focus",
            "type": "focus",
            "desc": "输入框聚焦时触发，event.detail = {value: value}",
            "bindable": true,
            "catchable": false
        },
        "blur": {
            "name": "blur",
            "type": "blur",
            "desc": "输入框失去焦点时触发，event.detail = {value: value}",
            "bindable": true,
            "catchable": false
        },
        "linechange": {
            "name": "linechange",
            "type": "linechange",
            "desc": "输入框行数变化时调用，event.detail = {height: 0, heightRpx: 0, lineCount: 0}",
            "bindable": true,
            "catchable": false
        },
        "input": {
            "name": "input",
            "type": "input",
            "desc": "当键盘输入时，触发 input 事件，event.detail = {value: value}， bindinput 处理函数的返回值并不会反映到 textarea 上 ",
            "bindable": true,
            "catchable": false
        },
        "confirm": {
            "name": "confirm",
            "type": "confirm",
            "desc": "点击完成时， 触发 confirm 事件，event.detail = {value: value}",
            "bindable": true,
            "catchable": false
        }
    }
});