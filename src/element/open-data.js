import * as util from '../common/util.js';
import createElement from './createElement.js';
import types from '../common/types.js';
export default createElement({
    "name": "open-data",
    "desc": "",
    "props": [{
        "name": "type",
        "type": types.String,
        "desc": "开放数据类型"
    }, {
        "name": "open-gid",
        "type": types.String,
        "desc": "当 type=\"groupName\" 时生效, 群id"
    }],
    "events": {}
});