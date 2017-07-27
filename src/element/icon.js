import * as util from '../common/util.js';
import createElement from '../common/createElement.js';
import types from '../common/types.js';
export default createElement({
    "name": "icon",
    "desc": "图标。",
    "props": [{
        "name": "type",
        "type": types.String,
        "desc": "icon的类型，有效值：success, success_no_circle, info, warn, waiting, cancel, download, search, clear"
    }, {
        "name": "size",
        "type": types.Number,
        "default": 23,
        "desc": "icon的大小，单位px"
    }, {
        "name": "color",
        "type": types.Color,
        "desc": "icon的颜色，同css的color"
    }],
    "events": {}
});