import * as util from './util.js';
import types from './types.js';
import nativeProps from './native.js';
import baseProps from './base.js';
import baseEvents from './base-event.js';

export default spec => {
    spec.props = (nativeProps).concat(baseProps).concat(spec.props);
    spec.events = Object.assign({}, baseEvents, spec.events);
    return spec;
}