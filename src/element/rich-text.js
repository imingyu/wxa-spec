import * as util from '../common/util.js';
import createElement from '../common/createElement.js';
import types from '../common/types.js';
export default createElement({
    "name": "rich-text",
    "desc": "富文本。",
    "props": [{
        "name": "nodes",
        "type": "Array / String",
        "default": "[]",
        "desc": "节点列表 / HTML String",
        "minVersion": "1.4.0"
    }],
    "events": {}
});