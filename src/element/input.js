import * as util from '../common/util.js';
import createElement from '../common/createElement.js';
import types from '../common/types.js';
export default createElement({
    "name": "input",
    "desc": "输入框。",
    "props": [{
        "name": "value",
        "type": types.String,
        "desc": "输入框的初始内容"
    }, {
        "name": "type",
        "type": types.String,
        "default": "\"text\"",
        "desc": "input 的类型",
        "values": [{
            "value": "text",
            "desc": "文本输入键盘"
        }, {
            "value": "number",
            "desc": "数字输入键盘"
        }, {
            "value": "idcard",
            "desc": "身份证输入键盘"
        }, {
            "value": "digit",
            "desc": "带小数点的数字键盘"
        }]
    }, {
        "name": "password",
        "type": types.Boolean,
        "default": false,
        "desc": "是否是密码类型"
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
        "default": "\"input-placeholder\"",
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
        "name": "cursor-spacing",
        "type": types.Number,
        "default": 0,
        "desc": "指定光标与键盘的距离，单位 px 。取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离"
    }, {
        "name": "auto-focus",
        "type": types.Boolean,
        "default": false,
        "desc": "(即将废弃，请直接使用 focus )自动聚焦，拉起键盘"
    }, {
        "name": "focus",
        "type": types.Boolean,
        "default": false,
        "desc": "获取焦点"
    }, {
        "name": "confirm-type",
        "type": types.String,
        "default": "\"done\"",
        "desc": "设置键盘右下角按钮的文字",
        "minVersion": "1.1.0",
        "values": [{
            "value": "send",
            "desc": "右下角按钮为“发送”"
        }, {
            "value": "search",
            "desc": "右下角按钮为“搜索”"
        }, {
            "value": "next",
            "desc": "右下角按钮为“下一个”"
        }, {
            "value": "go",
            "desc": "右下角按钮为“前往”"
        }, {
            "value": "done",
            "desc": "右下角按钮为“完成”"
        }]
    }, {
        "name": "confirm-hold",
        "type": types.Boolean,
        "default": false,
        "desc": "点击键盘右下角按钮时是否保持键盘不收起",
        "minVersion": "1.1.0"
    }],
    "events": {
        "input": {
            "name": "input",
            "type": "input",
            "desc": "当键盘输入时，触发input事件，event.detail = {value: value}，处理函数可以直接 return 一个字符串，将替换输入框的内容。",
            "bindable": true,
            "catchable": false
        },
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
        "confirm": {
            "name": "confirm",
            "type": "confirm",
            "desc": "点击完成按钮时触发，event.detail = {value: value}",
            "bindable": true,
            "catchable": false
        }
    }
});