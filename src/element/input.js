import * as util from '../common/util.js';
import createElement from './createElement.js';
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
        "desc": "input 的类型"
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
        "minVersion": "1.1.0"
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
            "bindable": true,
            "catchable": false
        },
        "focus": {
            "name": "focus",
            "type": "focus",
            "bindable": true,
            "catchable": false
        },
        "blur": {
            "name": "blur",
            "type": "blur",
            "bindable": true,
            "catchable": false
        },
        "confirm": {
            "name": "confirm",
            "type": "confirm",
            "bindable": true,
            "catchable": false
        }
    }
});