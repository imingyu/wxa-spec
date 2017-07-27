import * as util from '../common/util.js';
import createElement from './createElement.js';
import types from '../common/types.js';
export default createElement({
    "name": "image",
    "desc": "图片。",
    "props": [{
        "name": "src",
        "type": types.String,
        "desc": "图片资源地址"
    }, {
        "name": "mode",
        "type": types.String,
        "default": "'scaleToFill'",
        "desc": "图片裁剪、缩放的模式"
    }],
    "events": {
        "error": {
            "name": "error",
            "type": "error",
            "bindable": true,
            "catchable": false
        },
        "load": {
            "name": "load",
            "type": "load",
            "bindable": true,
            "catchable": false
        }
    }
});