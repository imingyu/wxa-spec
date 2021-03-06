import * as util from './util.js';
import types from './types.js';
import nativeProps from './native-prop.js';
import baseProps from './base-prop.js';
import baseEvents from './base-event.js';

export default spec => {
    spec.props = (nativeProps).concat(baseProps).concat(spec.props);
    spec.props.forEach(prop => {
        if (!prop.compute) {
            prop.compute = (function (val) {
                return util.computeVal(this.type, this['default'], val);
            }).bind(prop);
        }
    });
    spec.events = Object.assign({}, baseEvents, spec.events);
    return spec;
}