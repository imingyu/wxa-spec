import * as util from '../common/util.js';
import createElement from './createElement.js';
import types from '../common/types.js';
export default createElement({
    "name": "picker",
    "desc": "从底部弹起的滚动选择器，现支持五种选择器，通过mode来区分，分别是普通选择器，多列选择器，时间选择器，日期选择器，省市区选择器，默认是普通选择器。",
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
            "bindable": true,
            "catchable": false
        }
    }
});