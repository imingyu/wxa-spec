import * as util from '../common/util.js';
import createElement from './createElement.js';
import types from '../common/types.js';
export default createElement({
    "name": "navigator",
    "desc": "页面链接。",
    "props": [{
        "name": "url",
        "type": types.String,
        "desc": "应用内的跳转链接"
    }, {
        "name": "open-type",
        "type": types.String,
        "default": "navigate",
        "desc": "跳转方式"
    }, {
        "name": "delta",
        "type": types.Number,
        "desc": "当 open-type 为 'navigateBack' 时有效，表示回退的层数"
    }, {
        "name": "hover-class",
        "type": types.String,
        "default": "navigator-hover",
        "desc": "指定点击时的样式类，当hover-class=\"none\"时，没有点击态效果"
    }, {
        "name": "hover-start-time",
        "type": types.Number,
        "default": 50,
        "desc": "按住后多久出现点击态，单位毫秒"
    }, {
        "name": "hover-stay-time",
        "type": types.Number,
        "default": 600,
        "desc": "手指松开后点击态保留时间，单位毫秒"
    }],
    "events": {}
});