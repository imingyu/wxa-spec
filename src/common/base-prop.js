import types from './types.js';
export default [
    {
        type: types.Boolean,
        name: 'hidden',
        default: false,
        desc:'组件是否显示'
    },
    {
        type: types.Any,
        desc:'自定义属性',
        name: val => {
            return val.indexOf('data-') == 0;
        }
    }
];