import * as util from '../common/util.js';
import createElement from '../common/createElement.js';
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
            "desc": "手指触摸动作开始",
            "bindable": true,
            "catchable": false
        },
        "touchmove": {
            "name": "touchmove",
            "type": "touchmove",
            "desc": "手指触摸后移动",
            "bindable": true,
            "catchable": false
        },
        "touchend": {
            "name": "touchend",
            "type": "touchend",
            "desc": "手指触摸动作结束",
            "bindable": true,
            "catchable": false
        },
        "touchcancel": {
            "name": "touchcancel",
            "type": "touchcancel",
            "desc": "手指触摸动作被打断，如来电提醒，弹窗",
            "bindable": true,
            "catchable": false
        },
        "longtap": {
            "name": "longtap",
            "type": "longtap",
            "desc": "手指长按 500ms 之后触发，触发了长按事件后进行移动不会触发屏幕的滚动",
            "bindable": true,
            "catchable": false
        },
        "error": {
            "name": "error",
            "type": "error",
            "desc": "当发生错误时触发 error 事件，detail = {errMsg: 'something wrong'}",
            "bindable": true,
            "catchable": false
        }
    }
});