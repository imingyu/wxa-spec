import * as util from '../common/util.js';
import createElement from '../common/createElement.js';
import types from '../common/types.js';
export default createElement({
    "name": "movable-area",
    "desc": "可移动的视图容器，在页面中可以拖拽滑动",
    "props": [{
        "name": "direction",
        "type": types.String,
        "default": "none",
        "desc": "movable-view的移动方向，属性值有all、vertical、horizontal、none"
    }, {
        "name": "inertia",
        "type": types.Boolean,
        "default": false,
        "desc": "movable-view是否带有惯性"
    }, {
        "name": "out-of-bounds",
        "type": types.Boolean,
        "default": false,
        "desc": "超过可移动区域后，movable-view是否还可以移动"
    }, {
        "name": "x",
        "type": types.Number,
        "desc": "定义x轴方向的偏移，如果x的值不在可移动范围内，会自动移动到可移动范围；改变x的值会触发动画"
    }, {
        "name": "y",
        "type": types.Number,
        "desc": "定义y轴方向的偏移，如果y的值不在可移动范围内，会自动移动到可移动范围；改变y的值会触发动画"
    }, {
        "name": "damping",
        "type": types.Number,
        "default": 20,
        "desc": "阻尼系数，用于控制x或y改变时的动画和过界回弹的动画，值越大移动越快"
    }, {
        "name": "friction",
        "type": types.Number,
        "default": 2,
        "desc": "摩擦系数，用于控制惯性滑动的动画，值越大摩擦力越大，滑动越快停止；必须大于0，否则会被设置成默认值"
    }],
    "events": {}
});