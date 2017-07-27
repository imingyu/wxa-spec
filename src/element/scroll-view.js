import * as util from '../common/util.js';
import createElement from '../common/createElement.js';
import types from '../common/types.js';
export default createElement({
    "name": "scroll-view",
    "desc": "可滚动视图区域。",
    "props": [{
        "name": "scroll-x",
        "type": types.Boolean,
        "default": false,
        "desc": "允许横向滚动"
    }, {
        "name": "scroll-y",
        "type": types.Boolean,
        "default": false,
        "desc": "允许纵向滚动"
    }, {
        "name": "upper-threshold",
        "type": types.Number,
        "default": 50,
        "desc": "距顶部/左边多远时（单位px），触发 scrolltoupper 事件"
    }, {
        "name": "lower-threshold",
        "type": types.Number,
        "default": 50,
        "desc": "距底部/右边多远时（单位px），触发 scrolltolower 事件"
    }, {
        "name": "scroll-top",
        "type": types.Number,
        "desc": "设置竖向滚动条位置"
    }, {
        "name": "scroll-left",
        "type": types.Number,
        "desc": "设置横向滚动条位置"
    }, {
        "name": "scroll-into-view",
        "type": types.String,
        "desc": "值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素"
    }, {
        "name": "scroll-with-animation",
        "type": types.Boolean,
        "default": false,
        "desc": "在设置滚动条位置时使用动画过渡"
    }, {
        "name": "enable-back-to-top",
        "type": types.Boolean,
        "default": false,
        "desc": "iOS点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只支持竖向"
    }],
    "events": {
        "scrolltoupper": {
            "name": "scrolltoupper",
            "type": "scrolltoupper",
            "desc": "滚动到顶部/左边，会触发 scrolltoupper 事件",
            "bindable": true,
            "catchable": false
        },
        "scrolltolower": {
            "name": "scrolltolower",
            "type": "scrolltolower",
            "desc": "滚动到底部/右边，会触发 scrolltolower 事件",
            "bindable": true,
            "catchable": false
        },
        "scroll": {
            "name": "scroll",
            "type": "scroll",
            "desc": "滚动时触发，event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY}",
            "bindable": true,
            "catchable": false
        }
    }
});