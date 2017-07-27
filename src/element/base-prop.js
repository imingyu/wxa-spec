import * as util from '../util.js';
import types from '../types.js';

export default [
    {
        type: types.Boolean,
        name: 'hidden',
        default: false,
        desc:'组件是否显示',
        compute(val) {
            return util.computeVal(this.type, this.default, val);
        }
    },
    {
        type: types.Any,
        desc:'自定义属性',
        name: val => {
            return val.indexOf('data-') == 0;
        },
        compute(val) {
            return util.computeVal(this.type, undefined, val);
        }
    }
];