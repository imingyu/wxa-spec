import * as util from '../common/util.js';
import createElement from '../common/createElement.js';
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
        "desc": "跳转方式",
        "values": [{
            "value": "navigate",
            "desc": "对应 wx.navigateTo 的功能",
            "minVersion": ""
        }, {
            "value": "redirect",
            "desc": "对应 wx.redirectTo 的功能",
            "minVersion": ""
        }, {
            "value": "switchTab",
            "desc": "对应 wx.switchTab 的功能",
            "minVersion": ""
        }, {
            "value": "reLaunch",
            "desc": "对应 wx.reLaunch 的功能",
            "minVersion": "1.1.0"
        }, {
            "value": "navigateBack",
            "desc": "对应 wx.navigateBack 的功能",
            "minVersion": "1.1.0"
        }]
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