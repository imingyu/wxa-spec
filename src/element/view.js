import * as util from '../util.js';
import types from '../types.js';
import native from './native.js';
import base from './base.js';

export var view = {
    props: Object.assign({
        'hover-class': {
            type: types.String,
            default: 'none',
            compute(val) {
                return util.computeVal(this.type, this.default, val);
            }
        },
        'hover-start-time': {
            type: types.Number,
            default: 25,
            compute(val) {
                return util.computeVal(this.type, this.default, val);
            }
        },
        'hover-stay-time': {
            type: types.Number,
            default: 400,
            compute(val) {
                return util.computeVal(this.type, this.default, val);
            }
        }
    }, base, native),
    events: {
    }
};