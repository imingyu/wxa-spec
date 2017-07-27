import * as util from '../common/util.js';
import createElement from '../common/createElement.js';
import types from '../common/types.js';
export default createElement({
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