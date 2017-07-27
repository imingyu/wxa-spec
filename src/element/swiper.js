import * as util from '../common/util.js';
import createElement from '../common/createElement.js';
import types from '../common/types.js';
export default createElement({
    "name": "swiper",
    "desc": "滑块视图容器。",
    "props": [{
        "name": "indicator-dots",
        "type": types.Boolean,
        "default": false,
        "desc": "是否显示面板指示点"
    }, {
        "name": "indicator-color",
        "type": types.Color,
        "default": "rgba(0, 0, 0, .3)",
        "desc": "指示点颜色",
        "minVersion": "1.1.0"
    }, {
        "name": "indicator-active-color",
        "type": types.Color,
        "default": "#000000",
        "desc": "当前选中的指示点颜色",
        "minVersion": "1.1.0"
    }, {
        "name": "autoplay",
        "type": types.Boolean,
        "default": false,
        "desc": "是否自动切换"
    }, {
        "name": "current",
        "type": types.Number,
        "default": 0,
        "desc": "当前所在页面的 index"
    }, {
        "name": "interval",
        "type": types.Number,
        "default": 5000,
        "desc": "自动切换时间间隔"
    }, {
        "name": "duration",
        "type": types.Number,
        "default": 500,
        "desc": "滑动动画时长"
    }, {
        "name": "circular",
        "type": types.Boolean,
        "default": false,
        "desc": "是否采用衔接滑动"
    }, {
        "name": "vertical",
        "type": types.Boolean,
        "default": false,
        "desc": "滑动方向是否为纵向"
    }],
    "events": {
        "change": {
            "name": "change",
            "type": "change",
            "desc": "current 改变时会触发 change 事件，event.detail = {current: current, source: source}",
            "bindable": true,
            "catchable": false
        }
    }
});