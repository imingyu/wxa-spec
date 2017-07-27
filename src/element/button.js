import * as util from '../common/util.js';
import createElement from '../common/createElement.js';
import types from '../common/types.js';
export default createElement({
    "name": "button",
    "desc": "按钮。",
    "props": [{
        "name": "size",
        "type": types.String,
        "default": "default",
        "desc": "按钮的大小",
        "values": [{
            "value": "default",
            "desc": ""
        }, {
            "value": "mini"
        }]
    }, {
        "name": "type",
        "type": types.String,
        "default": "default",
        "desc": "按钮的样式类型",
        "values": [{
            "value": "primary",
            "desc": ""
        }, {
            "value": "default",
            "desc": ""
        }, {
            "value": "warn"
        }]
    }, {
        "name": "plain",
        "type": types.Boolean,
        "default": false,
        "desc": "按钮是否镂空，背景色透明"
    }, {
        "name": "disabled",
        "type": types.Boolean,
        "default": false,
        "desc": "是否禁用"
    }, {
        "name": "loading",
        "type": types.Boolean,
        "default": false,
        "desc": "名称前是否带 loading 图标"
    }, {
        "name": "form-type",
        "type": types.String,
        "desc": "用于 <form/> 组件，点击分别会触发 <form/> 组件的 submit/reset 事件",
        "values": [{
            "value": "submit",
            "desc": "提交表单"
        }, {
            "value": "reset",
            "desc": "重置表单"
        }]
    }, {
        "name": "open-type",
        "type": types.String,
        "desc": "微信开放能力",
        "minVersion": "1.1.0",
        "values": [{
            "value": "contact",
            "desc": "打开客服会话",
            "minVersion": "1.1.0"
        }, {
            "value": "share",
            "desc": "触发用户转发，使用前建议先阅读使用指引",
            "minVersion": "1.2.0"
        }, {
            "value": "getUserInfo",
            "desc": "获取用户信息，可以从bindgetuserinfo回调中获取到用户信息",
            "minVersion": "1.3.0"
        }]
    }, {
        "name": "hover-class",
        "type": types.String,
        "default": "button-hover",
        "desc": "指定按钮按下去的样式类。当 hover-class=\"none\" 时，没有点击态效果"
    }, {
        "name": "hover-start-time",
        "type": types.Number,
        "default": 20,
        "desc": "按住后多久出现点击态，单位毫秒"
    }, {
        "name": "hover-stay-time",
        "type": types.Number,
        "default": 70,
        "desc": "手指松开后点击态保留时间，单位毫秒"
    }, {
        "name": "session-from",
        "type": types.String,
        "desc": "open-type=\"contact\"时有效：用户从该按钮进入会话时，开发者将收到带上本参数的事件推送。本参数可用于区分用户进入客服会话的来源。",
        "minVersion": "1.4.0"
    }],
    "events": {
        "getuserinfo": {
            "name": "getuserinfo",
            "type": "getuserinfo",
            "desc": "open-type=\"getUserInfo\"时有效：用户点击该按钮时，会返回获取到的用户信息，从返回参数的detail中获取到的值同wx.getUserInfo",
            "bindable": true,
            "catchable": false
        }
    },
    "minVersion": 1.3
});