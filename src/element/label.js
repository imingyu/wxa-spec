import * as util from '../common/util.js';
import createElement from './createElement.js';
import types from '../common/types.js';
export default createElement({
    "name": "label",
    "desc": "用来改进表单组件的可用性，使用for属性找到对应的id，或者将控件放在该标签下，当点击时，就会触发对应的控件。",
    "props": [{
        "name": "for",
        "type": types.String,
        "default": "绑定控件的 id",
        "desc": ""
    }],
    "events": {}
});