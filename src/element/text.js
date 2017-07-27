import * as util from '../common/util.js';
import createElement from './createElement.js';
import types from '../common/types.js';
export default createElement({
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
        "minVersion": "1.4.0"
    }, {
        "name": "decode",
        "type": types.Boolean,
        "default": false,
        "desc": "是否解码",
        "minVersion": "1.4.0"
    }],
    "events": {}
});