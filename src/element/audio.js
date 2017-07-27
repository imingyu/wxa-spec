import * as util from '../common/util.js';
import createElement from '../common/createElement.js';
import types from '../common/types.js';
export default createElement({
    "name": "audio",
    "desc": "音频。",
    "props": [{
        "name": "id",
        "type": types.String,
        "desc": "audio 组件的唯一标识符"
    }, {
        "name": "src",
        "type": types.String,
        "desc": "要播放音频的资源地址"
    }, {
        "name": "loop",
        "type": types.Boolean,
        "default": false,
        "desc": "是否循环播放"
    }, {
        "name": "controls",
        "type": types.Boolean,
        "default": true,
        "desc": "是否显示默认控件"
    }, {
        "name": "poster",
        "type": types.String,
        "desc": "默认控件上的音频封面的图片资源地址，如果 controls 属性值为 false 则设置 poster 无效"
    }, {
        "name": "name",
        "type": types.String,
        "default": "未知音频",
        "desc": "默认控件上的音频名字，如果 controls 属性值为 false 则设置 name 无效"
    }, {
        "name": "author",
        "type": types.String,
        "default": "未知作者",
        "desc": "默认控件上的作者名字，如果 controls 属性值为 false 则设置 author 无效"
    }],
    "events": {
        "error": {
            "name": "error",
            "type": "error",
            "desc": "当发生错误时触发 error 事件，detail = {errMsg: MediaError.code}",
            "bindable": true,
            "catchable": false
        },
        "play": {
            "name": "play",
            "type": "play",
            "desc": "当开始/继续播放时触发play事件",
            "bindable": true,
            "catchable": false
        },
        "pause": {
            "name": "pause",
            "type": "pause",
            "desc": "当暂停播放时触发 pause 事件",
            "bindable": true,
            "catchable": false
        },
        "timeupdate": {
            "name": "timeupdate",
            "type": "timeupdate",
            "desc": "当播放进度改变时触发 timeupdate 事件，detail = {currentTime, duration}",
            "bindable": true,
            "catchable": false
        },
        "ended": {
            "name": "ended",
            "type": "ended",
            "desc": "当播放到末尾时触发 ended 事件",
            "bindable": true,
            "catchable": false
        }
    }
});