import * as util from '../common/util.js';
import createElement from '../common/createElement.js';
import types from '../common/types.js';
export default createElement({
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