(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.WxaSpec = factory());
}(this, (function () { 'use strict';

var version = "0.1.0";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var isFalse = function isFalse(val) {
    return val === false || val === null || val === undefined || val === '' || String.prototype.trim.call(val) == '' || typeof val === 'number' && isNaN(val);
};


var computeVal = function computeVal(type, defaultVal, val) {
    var typeCode = 'Any',
        len = arguments.length,
        result;
    if (len <= 2) {
        return defaultVal;
    }
    if (typeCode === 'Any') {
        return val;
    }

    switch (typeCode) {
        case 'String':
            {
                result = isFalse(val) ? defaultVal + "" : val + "";
            }break;
        case 'Number':
            {
                defaultVal = parseFloat(defaultVal);
                result = isFalse(val) ? defaultVal : isNaN(val) ? defaultVal : parseFloat(val);
            }break;
        case 'Boolean':
            {
                result = isFalse(val) || val === false ? false : true;
            }break;
        case 'Function':
            {
                result = typeof val !== 'function' ? undefined : val;
            }break;
        case 'Object':
            {
                result = (typeof val === 'undefined' ? 'undefined' : _typeof(val)) !== 'object' ? undefined : val;
            }break;
        case 'Any':
            {
                result = val;
            }break;
    }
    return result;
};

var types = {
    String: 'String',
    Boolean: 'Boolean',
    Object: 'Object',
    Number: 'Number',
    Any: 'Any',
    Array: 'Array',
    Funtion: 'Funtion'
};

var nativeProps = [{
    type: 'String',
    name: 'id',
    desc: '组件的唯一标示'
}, {
    type: 'String',
    name: 'class',
    desc: '组件的样式类'
}, {
    type: 'String',
    name: 'style',
    desc: '组件的内联样式'
}];

var baseProps = [{
    type: types.Boolean,
    name: 'hidden',
    default: false,
    desc: '组件是否显示',
    compute: function compute(val) {
        return computeVal(this.type, this.default, val);
    }
}, {
    type: types.Any,
    desc: '自定义属性',
    name: function name(val) {
        return val.indexOf('data-') == 0;
    },
    compute: function compute(val) {
        return computeVal(this.type, undefined, val);
    }
}];

var baseEvents = {
    tap: {
        type: 'tap',
        bindable: true,
        catchable: true,
        desc: '手指触摸后马上离开'
    },
    longtap: {
        type: 'longtap',
        bindable: true,
        catchable: true,
        desc: '手指触摸后，超过350ms再离开'
    },
    touchstart: {
        type: 'touchstart',
        bindable: true,
        catchable: true,
        desc: '手指触摸动作开始'
    },
    touchmove: {
        type: 'touchmove',
        bindable: true,
        catchable: true,
        desc: '手指触摸后移动'
    },
    touchcancel: {
        type: 'touchcancel',
        bindable: true,
        catchable: true,
        desc: '手指触摸动作被打断，如来电提醒，弹窗'
    },
    touchend: {
        type: 'touchend',
        bindable: true,
        catchable: true,
        desc: '手指触摸动作结束'
    }
};

var createElement = (function (spec) {
    spec.props = nativeProps.concat(baseProps).concat(spec.props);
    spec.events = Object.assign({}, baseEvents, spec.events);
    return spec;
});

var wxaContactButton = createElement({
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

var wxaOpenData = createElement({
    "name": "open-data",
    "desc": "用于展示微信开放的数据。",
    "props": [{
        "name": "type",
        "type": types.String,
        "desc": "开放数据类型",
        "values": [{
            "value": "groupName",
            "desc": "拉取群名称",
            "minVersion": "1.4.0"
        }]
    }, {
        "name": "open-gid",
        "type": types.String,
        "desc": "当 type=\"groupName\" 时生效, 群id"
    }],
    "events": {}
});

var wxaCanvas = createElement({
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

var wxaMap = createElement({
    "name": "map",
    "desc": "地图。",
    "props": [{
        "name": "longitude",
        "type": types.Number,
        "desc": "中心经度"
    }, {
        "name": "latitude",
        "type": types.Number,
        "desc": "中心纬度"
    }, {
        "name": "scale",
        "type": types.Number,
        "default": 16,
        "desc": "缩放级别，取值范围为5-18"
    }, {
        "name": "markers",
        "type": types.Array,
        "desc": "标记点"
    }, {
        "name": "covers",
        "type": types.Array,
        "desc": "即将移除，请使用 markers"
    }, {
        "name": "polyline",
        "type": types.Array,
        "desc": "路线"
    }, {
        "name": "circles",
        "type": types.Array,
        "desc": "圆"
    }, {
        "name": "controls",
        "type": types.Array,
        "desc": "控件"
    }, {
        "name": "include-points",
        "type": types.Array,
        "desc": "缩放视野以包含所有给定的坐标点"
    }, {
        "name": "show-location",
        "type": types.Boolean,
        "desc": "显示带有方向的当前定位点"
    }],
    "events": {
        "markertap": {
            "name": "markertap",
            "type": "markertap",
            "desc": "点击标记点时触发",
            "bindable": true,
            "catchable": false
        },
        "callouttap": {
            "name": "callouttap",
            "type": "callouttap",
            "desc": "点击标记点对应的气泡时触发",
            "bindable": true,
            "catchable": false
        },
        "controltap": {
            "name": "controltap",
            "type": "controltap",
            "desc": "点击控件时触发",
            "bindable": true,
            "catchable": false
        },
        "regionchange": {
            "name": "regionchange",
            "type": "regionchange",
            "desc": "视野发生变化时触发",
            "bindable": true,
            "catchable": false
        },
        "tap": {
            "name": "tap",
            "type": "tap",
            "desc": "点击地图时触发",
            "bindable": true,
            "catchable": false
        }
    },
    "minVersion": 1.2
});

var wxaVideo = createElement({
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

var wxaImage = createElement({
    "name": "image",
    "desc": "图片。",
    "props": [{
        "name": "src",
        "type": types.String,
        "desc": "图片资源地址"
    }, {
        "name": "mode",
        "type": types.String,
        "default": "'scaleToFill'",
        "desc": "图片裁剪、缩放的模式",
        "values": [{
            "value": "缩放",
            "desc": "scaleToFill",
            "minVersion": "不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素"
        }, {
            "value": "缩放",
            "desc": "aspectFit",
            "minVersion": "保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。"
        }, {
            "value": "缩放",
            "desc": "aspectFill",
            "minVersion": "保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。"
        }, {
            "value": "缩放",
            "desc": "widthFix",
            "minVersion": "宽度不变，高度自动变化，保持原图宽高比不变"
        }, {
            "value": "裁剪",
            "desc": "top",
            "minVersion": "不缩放图片，只显示图片的顶部区域"
        }, {
            "value": "裁剪",
            "desc": "bottom",
            "minVersion": "不缩放图片，只显示图片的底部区域"
        }, {
            "value": "裁剪",
            "desc": "center",
            "minVersion": "不缩放图片，只显示图片的中间区域"
        }, {
            "value": "裁剪",
            "desc": "left",
            "minVersion": "不缩放图片，只显示图片的左边区域"
        }, {
            "value": "裁剪",
            "desc": "right",
            "minVersion": "不缩放图片，只显示图片的右边区域"
        }, {
            "value": "裁剪",
            "desc": "top left",
            "minVersion": "不缩放图片，只显示图片的左上边区域"
        }, {
            "value": "裁剪",
            "desc": "top right",
            "minVersion": "不缩放图片，只显示图片的右上边区域"
        }, {
            "value": "裁剪",
            "desc": "bottom left",
            "minVersion": "不缩放图片，只显示图片的左下边区域"
        }, {
            "value": "裁剪",
            "desc": "bottom right",
            "minVersion": "不缩放图片，只显示图片的右下边区域"
        }]
    }],
    "events": {
        "error": {
            "name": "error",
            "type": "error",
            "desc": "当错误发生时，发布到 AppService 的事件名，事件对象event.detail = {errMsg: 'something wrong'}",
            "bindable": true,
            "catchable": false
        },
        "load": {
            "name": "load",
            "type": "load",
            "desc": "当图片载入完毕时，发布到 AppService 的事件名，事件对象event.detail = {height:'图片高度px', width:'图片宽度px'}",
            "bindable": true,
            "catchable": false
        }
    }
});

var wxaAudio = createElement({
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

var wxaNavigator = createElement({
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

var wxaTextarea = createElement({
    "name": "textarea",
    "desc": "多行输入框。",
    "props": [{
        "name": "value",
        "type": types.String,
        "desc": "输入框的内容"
    }, {
        "name": "placeholder",
        "type": types.String,
        "desc": "输入框为空时占位符"
    }, {
        "name": "placeholder-style",
        "type": types.String,
        "desc": "指定 placeholder 的样式"
    }, {
        "name": "placeholder-class",
        "type": types.String,
        "default": "textarea-placeholder",
        "desc": "指定 placeholder 的样式类"
    }, {
        "name": "disabled",
        "type": types.Boolean,
        "default": false,
        "desc": "是否禁用"
    }, {
        "name": "maxlength",
        "type": types.Number,
        "default": 140,
        "desc": "最大输入长度，设置为 -1 的时候不限制最大长度"
    }, {
        "name": "auto-focus",
        "type": types.Boolean,
        "default": false,
        "desc": "自动聚焦，拉起键盘。"
    }, {
        "name": "focus",
        "type": types.Boolean,
        "default": false,
        "desc": "获取焦点"
    }, {
        "name": "auto-height",
        "type": types.Boolean,
        "default": false,
        "desc": "是否自动增高，设置auto-height时，style.height不生效"
    }, {
        "name": "fixed",
        "type": types.Boolean,
        "default": false,
        "desc": "如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true"
    }, {
        "name": "cursor-spacing",
        "type": types.Number,
        "default": 0,
        "desc": "指定光标与键盘的距离，单位 px 。取 textarea 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离"
    }],
    "events": {
        "focus": {
            "name": "focus",
            "type": "focus",
            "desc": "输入框聚焦时触发，event.detail = {value: value}",
            "bindable": true,
            "catchable": false
        },
        "blur": {
            "name": "blur",
            "type": "blur",
            "desc": "输入框失去焦点时触发，event.detail = {value: value}",
            "bindable": true,
            "catchable": false
        },
        "linechange": {
            "name": "linechange",
            "type": "linechange",
            "desc": "输入框行数变化时调用，event.detail = {height: 0, heightRpx: 0, lineCount: 0}",
            "bindable": true,
            "catchable": false
        },
        "input": {
            "name": "input",
            "type": "input",
            "desc": "当键盘输入时，触发 input 事件，event.detail = {value: value}， bindinput 处理函数的返回值并不会反映到 textarea 上 ",
            "bindable": true,
            "catchable": false
        },
        "confirm": {
            "name": "confirm",
            "type": "confirm",
            "desc": "点击完成时， 触发 confirm 事件，event.detail = {value: value}",
            "bindable": true,
            "catchable": false
        }
    }
});

var wxaSwitch = createElement({
    "name": "switch",
    "desc": "开关选择器。",
    "props": [{
        "name": "checked",
        "type": types.Boolean,
        "default": false,
        "desc": "是否选中"
    }, {
        "name": "type",
        "type": types.String,
        "default": "switch",
        "desc": "样式，有效值：switch, checkbox"
    }, {
        "name": "color",
        "type": types.Color,
        "desc": "switch 的颜色，同 css 的 color"
    }],
    "events": {
        "change": {
            "name": "change",
            "type": "change",
            "desc": "checked 改变时触发 change 事件，event.detail={ value:checked}",
            "bindable": true,
            "catchable": false
        }
    }
});

var wxaSlider = createElement({
    "name": "slider",
    "desc": "滑动选择器。",
    "props": [{
        "name": "min",
        "type": types.Number,
        "default": 0,
        "desc": "最小值"
    }, {
        "name": "max",
        "type": types.Number,
        "default": 100,
        "desc": "最大值"
    }, {
        "name": "step",
        "type": types.Number,
        "default": 1,
        "desc": "步长，取值必须大于 0，并且可被(max - min)整除"
    }, {
        "name": "disabled",
        "type": types.Boolean,
        "default": false,
        "desc": "是否禁用"
    }, {
        "name": "value",
        "type": types.Number,
        "default": 0,
        "desc": "当前取值"
    }, {
        "name": "color",
        "type": types.Color,
        "default": "#e9e9e9",
        "desc": "背景条的颜色（请使用 backgroundColor）"
    }, {
        "name": "selected-color",
        "type": types.Color,
        "default": "#1aad19",
        "desc": "已选择的颜色（请使用 activeColor）"
    }, {
        "name": "activeColor",
        "type": types.Color,
        "default": "#1aad19",
        "desc": "已选择的颜色"
    }, {
        "name": "backgroundColor",
        "type": types.Color,
        "default": "#e9e9e9",
        "desc": "背景条的颜色"
    }, {
        "name": "show-value",
        "type": types.Boolean,
        "default": false,
        "desc": "是否显示当前 value"
    }],
    "events": {
        "change": {
            "name": "change",
            "type": "change",
            "desc": "完成一次拖动后触发的事件，event.detail = {value: value}",
            "bindable": true,
            "catchable": false
        }
    }
});

var wxaRadioGroup = createElement({
    "name": "radio-group",
    "desc": "单项选择器，内部由多个<radio/>组成。",
    "props": [],
    "events": {
        "change": {
            "name": "change",
            "type": "change",
            "desc": "<radio-group/> 中的选中项发生变化时触发 change 事件，event.detail = {value: 选中项radio的value}",
            "bindable": true,
            "catchable": false
        }
    }
});

var wxaRadio = createElement({
    "name": "radio",
    "desc": "单选项目",
    "props": [{
        "name": "value",
        "type": types.String,
        "desc": "<radio/> 标识。当该<radio/> 选中时，<radio-group/> 的 change 事件会携带<radio/>的value"
    }, {
        "name": "checked",
        "type": types.Boolean,
        "default": false,
        "desc": "当前是否选中"
    }, {
        "name": "disabled",
        "type": types.Boolean,
        "default": false,
        "desc": "是否禁用"
    }, {
        "name": "color",
        "type": types.Color,
        "desc": "radio的颜色，同css的color"
    }],
    "events": {}
});

var wxaPickerView = createElement({
    "name": "picker-view",
    "desc": "嵌入页面的滚动选择器",
    "props": [{
        "name": "value",
        "type": "NumberArray",
        "default": "数组中的数字依次表示 picker-view 内的 picker-view-colume 选择的第几项（下标从 0 开始），数字大于 picker-view-column 可选项长度时，选择最后一项。",
        "desc": ""
    }, {
        "name": "indicator-style",
        "type": types.String,
        "default": "设置选择器中间选中框的样式",
        "desc": ""
    }, {
        "name": "indicator-class",
        "type": types.String,
        "default": "设置选择器中间选中框的类名",
        "desc": "1.1.0"
    }],
    "events": {
        "change": {
            "name": "change",
            "type": "change",
            "desc": "",
            "bindable": true,
            "catchable": false
        }
    }
});

var wxaPickerViewColumn = createElement({
    "name": "picker-view-column",
    "desc": "",
    "props": [],
    "events": {}
});

var wxaPicker = createElement({
    "name": "picker",
    "desc": "普通选择器：mode = selector",
    "props": [{
        "name": "range",
        "type": "Array / Object Array",
        "default": "[]",
        "desc": "mode为 selector 或 multiSelector 时，range 有效"
    }, {
        "name": "range-key",
        "type": types.String,
        "desc": "当 range 是一个 Object Array 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容"
    }, {
        "name": "value",
        "type": types.Number,
        "default": 0,
        "desc": "value 的值表示选择了 range 中的第几个（下标从 0 开始）"
    }, {
        "name": "disabled",
        "type": types.Boolean,
        "default": false,
        "desc": "是否禁用"
    }],
    "events": {
        "change": {
            "name": "change",
            "type": "change",
            "desc": "value 改变时触发 change 事件，event.detail = {value: value}",
            "bindable": true,
            "catchable": false
        }
    }
});

var wxaLabel = createElement({
    "name": "label",
    "desc": "目前可以绑定的控件有：<button/>, <checkbox/>, <radio/>, <switch/>。",
    "props": [{
        "name": "for",
        "type": types.String,
        "default": "绑定控件的 id",
        "desc": ""
    }],
    "events": {}
});

var wxaInput = createElement({
    "name": "input",
    "desc": "输入框。",
    "props": [{
        "name": "value",
        "type": types.String,
        "desc": "输入框的初始内容"
    }, {
        "name": "type",
        "type": types.String,
        "default": "\"text\"",
        "desc": "input 的类型",
        "values": [{
            "value": "text",
            "desc": "文本输入键盘"
        }, {
            "value": "number",
            "desc": "数字输入键盘"
        }, {
            "value": "idcard",
            "desc": "身份证输入键盘"
        }, {
            "value": "digit",
            "desc": "带小数点的数字键盘"
        }]
    }, {
        "name": "password",
        "type": types.Boolean,
        "default": false,
        "desc": "是否是密码类型"
    }, {
        "name": "placeholder",
        "type": types.String,
        "desc": "输入框为空时占位符"
    }, {
        "name": "placeholder-style",
        "type": types.String,
        "desc": "指定 placeholder 的样式"
    }, {
        "name": "placeholder-class",
        "type": types.String,
        "default": "\"input-placeholder\"",
        "desc": "指定 placeholder 的样式类"
    }, {
        "name": "disabled",
        "type": types.Boolean,
        "default": false,
        "desc": "是否禁用"
    }, {
        "name": "maxlength",
        "type": types.Number,
        "default": 140,
        "desc": "最大输入长度，设置为 -1 的时候不限制最大长度"
    }, {
        "name": "cursor-spacing",
        "type": types.Number,
        "default": 0,
        "desc": "指定光标与键盘的距离，单位 px 。取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离"
    }, {
        "name": "auto-focus",
        "type": types.Boolean,
        "default": false,
        "desc": "(即将废弃，请直接使用 focus )自动聚焦，拉起键盘"
    }, {
        "name": "focus",
        "type": types.Boolean,
        "default": false,
        "desc": "获取焦点"
    }, {
        "name": "confirm-type",
        "type": types.String,
        "default": "\"done\"",
        "desc": "设置键盘右下角按钮的文字",
        "minVersion": "1.1.0",
        "values": [{
            "value": "send",
            "desc": "右下角按钮为“发送”"
        }, {
            "value": "search",
            "desc": "右下角按钮为“搜索”"
        }, {
            "value": "next",
            "desc": "右下角按钮为“下一个”"
        }, {
            "value": "go",
            "desc": "右下角按钮为“前往”"
        }, {
            "value": "done",
            "desc": "右下角按钮为“完成”"
        }]
    }, {
        "name": "confirm-hold",
        "type": types.Boolean,
        "default": false,
        "desc": "点击键盘右下角按钮时是否保持键盘不收起",
        "minVersion": "1.1.0"
    }],
    "events": {
        "input": {
            "name": "input",
            "type": "input",
            "desc": "当键盘输入时，触发input事件，event.detail = {value: value}，处理函数可以直接 return 一个字符串，将替换输入框的内容。",
            "bindable": true,
            "catchable": false
        },
        "focus": {
            "name": "focus",
            "type": "focus",
            "desc": "输入框聚焦时触发，event.detail = {value: value}",
            "bindable": true,
            "catchable": false
        },
        "blur": {
            "name": "blur",
            "type": "blur",
            "desc": "输入框失去焦点时触发，event.detail = {value: value}",
            "bindable": true,
            "catchable": false
        },
        "confirm": {
            "name": "confirm",
            "type": "confirm",
            "desc": "点击完成按钮时触发，event.detail = {value: value}",
            "bindable": true,
            "catchable": false
        }
    }
});

var wxaForm = createElement({
    "name": "form",
    "desc": "当点击 <form/> 表单中 formType 为 submit 的 <button/> 组件时，会将表单组件中的 value 值进行提交，需要在表单组件中加上 name 来作为 key。",
    "props": [{
        "name": "report-submit",
        "type": types.Boolean,
        "default": "是否返回 formId 用于发送模板消息",
        "desc": ""
    }],
    "events": {
        "submit": {
            "name": "submit",
            "type": "submit",
            "desc": "",
            "bindable": true,
            "catchable": false
        },
        "reset": {
            "name": "reset",
            "type": "reset",
            "desc": "",
            "bindable": true,
            "catchable": false
        }
    }
});

var wxaCheckboxGroup = createElement({
    "name": "checkbox-group",
    "desc": "多项选择器，内部由多个checkbox组成。",
    "props": [],
    "events": {
        "change": {
            "name": "change",
            "type": "change",
            "desc": "<checkbox-group/>中选中项发生改变是触发 change 事件，detail = {value:[选中的checkbox的value的数组]}",
            "bindable": true,
            "catchable": false
        }
    }
});

var wxaCheckbox = createElement({
    "name": "checkbox",
    "desc": "多选项目。",
    "props": [{
        "name": "value",
        "type": types.String,
        "desc": "<checkbox/>标识，选中时触发<checkbox-group/>的 change 事件，并携带 <checkbox/> 的 value"
    }, {
        "name": "disabled",
        "type": types.Boolean,
        "default": false,
        "desc": "是否禁用"
    }, {
        "name": "checked",
        "type": types.Boolean,
        "default": false,
        "desc": "当前是否选中，可用来设置默认选中"
    }, {
        "name": "color",
        "type": types.Color,
        "desc": "checkbox的颜色，同css的color"
    }],
    "events": {}
});

var wxaButton = createElement({
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

var wxaProgress = createElement({
    "name": "progress",
    "desc": "进度条。",
    "props": [{
        "name": "percent",
        "type": "Float",
        "default": "无",
        "desc": "百分比0~100"
    }, {
        "name": "show-info",
        "type": types.Boolean,
        "default": false,
        "desc": "在进度条右侧显示百分比"
    }, {
        "name": "stroke-width",
        "type": types.Number,
        "default": 6,
        "desc": "进度条线的宽度，单位px"
    }, {
        "name": "color",
        "type": types.Color,
        "default": "#09BB07",
        "desc": "进度条颜色 （请使用 activeColor）"
    }, {
        "name": "activeColor",
        "type": types.Color,
        "desc": "已选择的进度条的颜色"
    }, {
        "name": "backgroundColor",
        "type": types.Color,
        "desc": "未选择的进度条的颜色"
    }, {
        "name": "active",
        "type": types.Boolean,
        "default": false,
        "desc": "进度条从左往右的动画"
    }],
    "events": {}
});

var wxaRichText = createElement({
    "name": "rich-text",
    "desc": "富文本。",
    "props": [{
        "name": "nodes",
        "type": "Array / String",
        "default": "[]",
        "desc": "节点列表 / HTML String",
        "minVersion": "1.4.0"
    }],
    "events": {}
});

var wxaText = createElement({
    "name": "text",
    "desc": "文本。",
    "props": [{
        "name": "selectable",
        "type": types.Boolean,
        "default": false,
        "desc": "文本是否可选",
        "minVersion": "1.1.0"
    }, {
        "name": "space",
        "type": types.String,
        "default": false,
        "desc": "显示连续空格",
        "minVersion": "1.4.0",
        "values": [{
            "value": "ensp",
            "desc": "中文字符空格一半大小"
        }, {
            "value": "emsp",
            "desc": "中文字符空格大小"
        }, {
            "value": "nbsp",
            "desc": "根据字体设置的空格大小"
        }]
    }, {
        "name": "decode",
        "type": types.Boolean,
        "default": false,
        "desc": "是否解码",
        "minVersion": "1.4.0"
    }],
    "events": {}
});

var wxaIcon = createElement({
    "name": "icon",
    "desc": "图标。",
    "props": [{
        "name": "type",
        "type": types.String,
        "desc": "icon的类型，有效值：success, success_no_circle, info, warn, waiting, cancel, download, search, clear"
    }, {
        "name": "size",
        "type": types.Number,
        "default": 23,
        "desc": "icon的大小，单位px"
    }, {
        "name": "color",
        "type": types.Color,
        "desc": "icon的颜色，同css的color"
    }],
    "events": {}
});

var wxaCoverView = createElement({
    "name": "cover-view",
    "desc": "覆盖在原生组件之上的文本视图，可覆盖的原生组件包括map、video、canvas，支持嵌套。",
    "props": [],
    "events": {}
});

var wxaCoverImage = createElement({
    "name": "cover-image",
    "desc": "覆盖在原生组件之上的图片视图，可覆盖的原生组件同cover-view，支持嵌套在cover-view里。",
    "props": [{
        "name": "src",
        "type": types.String,
        "desc": "图标路径，支持临时路径。暂不支持base64与网络地址。"
    }],
    "events": {}
});

var wxaMovableArea = createElement({
    "name": "movable-area",
    "desc": "可移动的视图容器，在页面中可以拖拽滑动",
    "props": [{
        "name": "direction",
        "type": types.String,
        "default": "none",
        "desc": "movable-view的移动方向，属性值有all、vertical、horizontal、none"
    }, {
        "name": "inertia",
        "type": types.Boolean,
        "default": false,
        "desc": "movable-view是否带有惯性"
    }, {
        "name": "out-of-bounds",
        "type": types.Boolean,
        "default": false,
        "desc": "超过可移动区域后，movable-view是否还可以移动"
    }, {
        "name": "x",
        "type": types.Number,
        "desc": "定义x轴方向的偏移，如果x的值不在可移动范围内，会自动移动到可移动范围；改变x的值会触发动画"
    }, {
        "name": "y",
        "type": types.Number,
        "desc": "定义y轴方向的偏移，如果y的值不在可移动范围内，会自动移动到可移动范围；改变y的值会触发动画"
    }, {
        "name": "damping",
        "type": types.Number,
        "default": 20,
        "desc": "阻尼系数，用于控制x或y改变时的动画和过界回弹的动画，值越大移动越快"
    }, {
        "name": "friction",
        "type": types.Number,
        "default": 2,
        "desc": "摩擦系数，用于控制惯性滑动的动画，值越大摩擦力越大，滑动越快停止；必须大于0，否则会被设置成默认值"
    }],
    "events": {}
});

var wxaMovableView = createElement({
    "name": "movable-view",
    "desc": "可移动的视图容器，在页面中可以拖拽滑动",
    "props": [{
        "name": "direction",
        "type": types.String,
        "default": "none",
        "desc": "movable-view的移动方向，属性值有all、vertical、horizontal、none"
    }, {
        "name": "inertia",
        "type": types.Boolean,
        "default": false,
        "desc": "movable-view是否带有惯性"
    }, {
        "name": "out-of-bounds",
        "type": types.Boolean,
        "default": false,
        "desc": "超过可移动区域后，movable-view是否还可以移动"
    }, {
        "name": "x",
        "type": types.Number,
        "desc": "定义x轴方向的偏移，如果x的值不在可移动范围内，会自动移动到可移动范围；改变x的值会触发动画"
    }, {
        "name": "y",
        "type": types.Number,
        "desc": "定义y轴方向的偏移，如果y的值不在可移动范围内，会自动移动到可移动范围；改变y的值会触发动画"
    }, {
        "name": "damping",
        "type": types.Number,
        "default": 20,
        "desc": "阻尼系数，用于控制x或y改变时的动画和过界回弹的动画，值越大移动越快"
    }, {
        "name": "friction",
        "type": types.Number,
        "default": 2,
        "desc": "摩擦系数，用于控制惯性滑动的动画，值越大摩擦力越大，滑动越快停止；必须大于0，否则会被设置成默认值"
    }],
    "events": {}
});

var wxaSwiper = createElement({
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

var wxaSwiperItem = createElement({
    "name": "swiper-item",
    "desc": "",
    "props": [],
    "events": {}
});

var wxaScrollView = createElement({
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

var wxaView = createElement({
    "name": "view",
    "desc": "视图容器。",
    "props": [{
        "name": "hover-class",
        "type": types.String,
        "default": "none",
        "desc": "指定按下去的样式类。当 hover-class=\"none\" 时，没有点击态效果"
    }, {
        "name": "hover-start-time",
        "type": types.Number,
        "default": 50,
        "desc": "按住后多久出现点击态，单位毫秒"
    }, {
        "name": "hover-stay-time",
        "type": types.Number,
        "default": 400,
        "desc": "手指松开后点击态保留时间，单位毫秒"
    }],
    "events": {}
});

var eles = Object.keys({
    'contact-button': true,
    'open-data': true,
    'canvas': true,
    'map': true,
    'video': true,
    'image': true,
    'audio': true,
    'navigator': true,
    'textarea': true,
    'switch': true,
    'slider': true,
    'radio-group': true,
    'radio': true,
    'picker-view': true,
    'picker-view-column': true,
    'picker': true,
    'label': true,
    'input': true,
    'form': true,
    'checkbox-group': true,
    'checkbox': true,
    'button': true,
    'progress': true,
    'rich-text': true,
    'text': true,
    'icon': true,
    'cover-view': true,
    'cover-image': true,
    'movable-area': true,
    'movable-view': true,
    'swiper': true,
    'swiper-item': true,
    'scroll-view': true,
    'view': true
});
var element = {
    wxaContactButton: wxaContactButton,
    wxaOpenData: wxaOpenData,
    wxaCanvas: wxaCanvas,
    wxaMap: wxaMap,
    wxaVideo: wxaVideo,
    wxaImage: wxaImage,
    wxaAudio: wxaAudio,
    wxaNavigator: wxaNavigator,
    wxaTextarea: wxaTextarea,
    wxaSwitch: wxaSwitch,
    wxaSlider: wxaSlider,
    wxaRadioGroup: wxaRadioGroup,
    wxaRadio: wxaRadio,
    wxaPickerView: wxaPickerView,
    wxaPickerViewColumn: wxaPickerViewColumn,
    wxaPicker: wxaPicker,
    wxaLabel: wxaLabel,
    wxaInput: wxaInput,
    wxaForm: wxaForm,
    wxaCheckboxGroup: wxaCheckboxGroup,
    wxaCheckbox: wxaCheckbox,
    wxaButton: wxaButton,
    wxaProgress: wxaProgress,
    wxaRichText: wxaRichText,
    wxaText: wxaText,
    wxaIcon: wxaIcon,
    wxaCoverView: wxaCoverView,
    wxaCoverImage: wxaCoverImage,
    wxaMovableArea: wxaMovableArea,
    wxaMovableView: wxaMovableView,
    wxaSwiper: wxaSwiper,
    wxaSwiperItem: wxaSwiperItem,
    wxaScrollView: wxaScrollView,
    wxaView: wxaView,
    elements: eles
};

var index = {
    version: version,
    element: element
};

return index;

})));
//# sourceMappingURL=index.js.map
