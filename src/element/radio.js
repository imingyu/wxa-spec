import * as util from '../common/util.js';
import createElement from '../common/createElement.js';
import types from '../common/types.js';
export default createElement({
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