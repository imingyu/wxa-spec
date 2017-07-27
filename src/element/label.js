import * as util from '../common/util.js';
import createElement from '../common/createElement.js';
import types from '../common/types.js';
export default createElement({
    "name": "label",
    "desc": "目前可以绑定的控件有：<button/>, <checkbox/>, <radio/>, <switch/>。",
    "props": [{
        "name": "for",
        "type": types.String,
        "default": "绑定控件的 id",
        "desc": ""
    }],
    "events": {}
});