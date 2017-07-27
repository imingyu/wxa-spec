import * as util from '../common/util.js';
import createElement from '../common/createElement.js';
import types from '../common/types.js';
export default createElement({
    "name": "cover-image",
    "desc": "覆盖在原生组件之上的图片视图，可覆盖的原生组件同cover-view，支持嵌套在cover-view里。",
    "props": [{
        "name": "src",
        "type": types.String,
        "desc": "图标路径，支持临时路径。暂不支持base64与网络地址。"
    }],
    "events": {}
});