import * as util from '../common/util.js';
import createElement from './createElement.js';
import types from '../common/types.js';
export default createElement({
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
            "bindable": true,
            "catchable": false
        },
        "callouttap": {
            "name": "callouttap",
            "type": "callouttap",
            "bindable": true,
            "catchable": false
        },
        "controltap": {
            "name": "controltap",
            "type": "controltap",
            "bindable": true,
            "catchable": false
        },
        "regionchange": {
            "name": "regionchange",
            "type": "regionchange",
            "bindable": true,
            "catchable": false
        },
        "tap": {
            "name": "tap",
            "type": "tap",
            "bindable": true,
            "catchable": false
        }
    },
    "minVersion": 1.2
});