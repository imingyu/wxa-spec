import * as util from '../common/util.js';
import createElement from '../common/createElement.js';
import types from '../common/types.js';
export default createElement({
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