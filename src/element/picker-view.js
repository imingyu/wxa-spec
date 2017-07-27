import * as util from '../common/util.js';
import createElement from './createElement.js';
import types from '../common/types.js';
export default createElement({
    "name": "picker-view",
    "desc": "嵌入页面的滚动选择器",
    "props": [{
        "name": "value",
        "type": "NumberArray",
        "default": "数组中的数字依次表示 picker-view 内的 picker-view-colume 选择的第几项（下标从 0 开始），数字大于 picker-view-column 可选项长度时，选择最后一项。",
        "desc": ""
    }, {
        "name": "indicator-style",
        "type": types.String,
        "default": "设置选择器中间选中框的样式",
        "desc": ""
    }, {
        "name": "indicator-class",
        "type": types.String,
        "default": "设置选择器中间选中框的类名",
        "desc": "1.1.0"
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