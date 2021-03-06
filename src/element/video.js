import * as util from '../common/util.js';
import createElement from '../common/createElement.js';
import types from '../common/types.js';
export default createElement({
    "name": "video",
    "desc": "视频。",
    "props": [{
        "name": "src",
        "type": types.String,
        "desc": "要播放视频的资源地址"
    }, {
        "name": "duration",
        "type": types.Number,
        "desc": "指定视频时长",
        "minVersion": "1.1.0"
    }, {
        "name": "controls",
        "type": types.Boolean,
        "default": true,
        "desc": "是否显示默认播放控件（播放/暂停按钮、播放进度、时间）"
    }, {
        "name": "danmu-list",
        "type": "Object Array",
        "desc": "弹幕列表"
    }, {
        "name": "danmu-btn",
        "type": types.Boolean,
        "default": false,
        "desc": "是否显示弹幕按钮，只在初始化时有效，不能动态变更"
    }, {
        "name": "enable-danmu",
        "type": types.Boolean,
        "default": false,
        "desc": "是否展示弹幕，只在初始化时有效，不能动态变更"
    }, {
        "name": "autoplay",
        "type": types.Boolean,
        "default": false,
        "desc": "是否自动播放"
    }, {
        "name": "loop",
        "type": types.Boolean,
        "default": false,
        "desc": "是否循环播放",
        "minVersion": "1.4.0"
    }, {
        "name": "muted",
        "type": types.Boolean,
        "default": false,
        "desc": "是否静音播放",
        "minVersion": "1.4.0"
    }, {
        "name": "objectFit",
        "type": types.String,
        "default": "contain",
        "desc": "当视频大小与 video 容器大小不一致时，视频的表现形式。contain：包含，fill：填充，cover：覆盖"
    }, {
        "name": "poster",
        "type": types.String,
        "desc": "默认控件上的音频封面的图片资源地址，如果 controls 属性值为 false 则设置 poster 无效"
    }],
    "events": {
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
        "ended": {
            "name": "ended",
            "type": "ended",
            "desc": "当播放到末尾时触发 ended 事件",
            "bindable": true,
            "catchable": false
        },
        "timeupdate": {
            "name": "timeupdate",
            "type": "timeupdate",
            "desc": "播放进度变化时触发，event.detail = {currentTime: '当前播放时间'} 。触发频率应该在 250ms 一次",
            "bindable": true,
            "catchable": false
        },
        "fullscreenchange": {
            "name": "fullscreenchange",
            "type": "fullscreenchange",
            "desc": "当视频进入和退出全屏是触发，event.detail = {fullScreen: '当前全屏状态'}",
            "bindable": true,
            "catchable": false
        }
    },
    "minVersion": 1.4
});