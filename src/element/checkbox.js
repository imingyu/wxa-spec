import * as util from '../common/util.js';
import createElement from './createElement.js';
import types from '../common/types.js';
export default createElement({
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