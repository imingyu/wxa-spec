import * as util from '../common/util.js';
import createElement from '../common/createElement.js';
import types from '../common/types.js';
export default createElement({
    "name": "contact-button",
    "desc": "客服会话按钮，用于在页面上显示一个客服会话按钮，用户点击该按钮后会进入客服会话。",
    "props": [{
        "name": "size",
        "type": types.Number,
        "default": 18,
        "desc": "会话按钮大小，有效值 18-27，单位：px"
    }, {
        "name": "type",
        "type": types.String,
        "default": "default-dark",
        "desc": "会话按钮的样式类型",
        "values": [{
            "value": "default-dark",
            "desc": ""
        }, {
            "value": "default-light"
        }]
    }, {
        "name": "session-from",
        "type": types.String,
        "desc": "用户从该按钮进入会话时，开发者将收到带上本参数的事件推送。本参数可用于区分用户进入客服会话的来源。"
    }],
    "events": {}
});