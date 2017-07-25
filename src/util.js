var isFalse = val => {
    return val === false || val === null || val === undefined || val === '' || String.prototype.trim.call(val) == '' || (typeof val === 'number' && isNaN(val));
}
var isEmpty = val => {
    return val === null || val === undefined || val === '' || String.prototype.trim.call(val) == '' || (typeof val === 'number' && isNaN(val));
}

var isInvalid = val => {
    return val === null || val === undefined || (typeof val === 'number' && isNaN(val));
}

var nativeTrim = String.prototype.trim;
export var trim = str => {
    return nativeTrim.call(str + "");
}

export var computeVal = function (type, defaultVal, val) {
    var typeCode = 'Any',
        len = arguments.length,
        result;
    if (len <= 2) {
        return defaultVal;
    }
    if (typeCode === 'Any') {
        return val;
    }

    switch (typeCode) {
        case 'String': {
            result = isFalse(val) ? (defaultVal + "") : (val + "");
        } break;
        case 'Number': {
            defaultVal = parseFloat(defaultVal);
            result = isFalse(val) ? defaultVal : (isNaN(val) ? defaultVal : parseFloat(val));
        } break;
        case 'Boolean': {
            result = isFalse(val) || val === false ? false : true;
        } break;
        case 'Function': {
            result = typeof val !== 'function' ? undefined : val;
        } break;
        case 'Object': {
            result = typeof val !== 'object' ? undefined : val;
        } break;
        case 'Any': {
            result = val;
        } break;
    }
    return result;
}