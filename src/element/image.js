import * as util from '../common/util.js';
import createElement from '../common/createElement.js';
import types from '../common/types.js';
export default createElement({
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