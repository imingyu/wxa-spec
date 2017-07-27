import * as util from '../common/util.js';
import createElement from './createElement.js';
import types from '../common/types.js';
export default createElement({
    "name": "slider",
    "desc": "滑动选择器。",
    "props": [{
        "name": "min",
        "type": types.Number,
        "default": 0,
        "desc": "最小值"
    }, {
        "name": "max",
        "type": types.Number,
        "default": 100,
        "desc": "最大值"
    }, {
        "name": "step",
        "type": types.Number,
        "default": 1,
        "desc": "步长，取值必须大于 0，并且可被(max - min)整除"
    }, {
        "name": "disabled",
        "type": types.Boolean,
        "default": false,
        "desc": "是否禁用"
    }, {
        "name": "value",
        "type": types.Number,
        "default": 0,
        "desc": "当前取值"
    }, {
        "name": "color",
        "type": types.Color,
        "default": "#e9e9e9",
        "desc": "背景条的颜色（请使用 backgroundColor）"
    }, {
        "name": "selected-color",
        "type": types.Color,
        "default": "#1aad19",
        "desc": "已选择的颜色（请使用 activeColor）"
    }, {
        "name": "activeColor",
        "type": types.Color,
        "default": "#1aad19",
        "desc": "已选择的颜色"
    }, {
        "name": "backgroundColor",
        "type": types.Color,
        "default": "#e9e9e9",
        "desc": "背景条的颜色"
    }, {
        "name": "show-value",
        "type": types.Boolean,
        "default": false,
        "desc": "是否显示当前 value"
    }],
    "events": {
        "change": {
            "name": "change",
            "type": "change",
            "bindable": true,
            "catchable": false
        }
    }
});