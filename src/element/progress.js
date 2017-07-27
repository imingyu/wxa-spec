import * as util from '../common/util.js';
import createElement from './createElement.js';
import types from '../common/types.js';
export default createElement({
    "name": "progress",
    "desc": "进度条。",
    "props": [{
        "name": "percent",
        "type": "Float",
        "default": "无",
        "desc": "百分比0~100"
    }, {
        "name": "show-info",
        "type": types.Boolean,
        "default": false,
        "desc": "在进度条右侧显示百分比"
    }, {
        "name": "stroke-width",
        "type": types.Number,
        "default": 6,
        "desc": "进度条线的宽度，单位px"
    }, {
        "name": "color",
        "type": types.Color,
        "default": "#09BB07",
        "desc": "进度条颜色 （请使用 activeColor）"
    }, {
        "name": "activeColor",
        "type": types.Color,
        "desc": "已选择的进度条的颜色"
    }, {
        "name": "backgroundColor",
        "type": types.Color,
        "desc": "未选择的进度条的颜色"
    }, {
        "name": "active",
        "type": types.Boolean,
        "default": false,
        "desc": "进度条从左往右的动画"
    }],
    "events": {}
});