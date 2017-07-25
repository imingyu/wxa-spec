import * as util from '../util.js';
import types from '../types.js';

export default [
    {
        type: types.Boolean,
        name: 'hidden',
        default: false,
        compute(val) {
            return util.computeVal(this.type, this.default, val);
        }
    },
    {
        type: types.Any,
        name: val => {
            return val.indexOf('data-') == 0;
        },
        compute(val) {
            return util.computeVal(this.type, undefined, val);
        }
    }
];