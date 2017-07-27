import * as util from '../common/util.js';
import createElement from './createElement.js';
import types from '../common/types.js';
export default createElement({
    "name": "canvas",
    "desc": "画布。",
    "props": [{
        "name": "canvas-id",
        "type": types.String,
        "desc": "canvas 组件的唯一标识符"
    }, {
        "name": "disable-scroll",
        "type": types.Boolean,
        "default": false,
        "desc": "当在 canvas 中移动时且有绑定手势事件时，禁止屏幕滚动以及下拉刷新"
    }],
    "events": {
        "touchstart": {
            "name": "touchstart",
            "type": "touchstart",
            "bindable": true,
            "catchable": false
        },
        "touchmove": {
            "name": "touchmove",
            "type": "touchmove",
            "bindable": true,
            "catchable": false
        },
        "touchend": {
            "name": "touchend",
            "type": "touchend",
            "bindable": true,
            "catchable": false
        },
        "touchcancel": {
            "name": "touchcancel",
            "type": "touchcancel",
            "bindable": true,
            "catchable": false
        },
        "longtap": {
            "name": "longtap",
            "type": "longtap",
            "bindable": true,
            "catchable": false
        },
        "error": {
            "name": "error",
            "type": "error",
            "bindable": true,
            "catchable": false
        }
    }
});