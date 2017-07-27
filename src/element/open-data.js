import * as util from '../common/util.js';
import createElement from '../common/createElement.js';
import types from '../common/types.js';
export default createElement({
    "name": "open-data",
    "desc": "用于展示微信开放的数据。",
    "props": [{
        "name": "type",
        "type": types.String,
        "desc": "开放数据类型",
        "values": [{
            "value": "groupName",
            "desc": "拉取群名称",
            "minVersion": "1.4.0"
        }]
    }, {
        "name": "open-gid",
        "type": types.String,
        "desc": "当 type=\"groupName\" 时生效, 群id"
    }],
    "events": {}
});