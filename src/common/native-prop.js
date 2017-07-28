import types from './types.js';
export default [
    {
        type: types.String,
        name: 'id',
        desc:'组件的唯一标示'
    },
    {
        type: types.String,
        name: 'class',
        desc:'组件的样式类'
    },
    {
        type: types.String,
        name: 'style',
        desc:'组件的内联样式'
    }
];