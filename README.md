# wxa-spec
微信小程序相关技术的编程元信息/说明书

![image](https://img.shields.io/npm/l/wxa-spec.svg)
[![image](https://img.shields.io/npm/v/wxa-spec.svg)](https://www.npmjs.com/package/wxa-spec)
[![image](https://img.shields.io/npm/dt/wxa-spec.svg)](https://www.npmjs.com/package/wxa-spec)


数据源：https://mp.weixin.qq.com/debug/wxadoc/dev/component/

更新日期：2017-07-28

## 安装
```
npm i wxa-spec -D
```

## 使用
```javascript
import WxaSpec from 'wxa-spec';

console.log(WxaSpec.element.wxaIcon);
//输出如下对象
{
    name: 'icon',
    desc: '图标。',
    props: [{
        type: 'String',
        name: 'id',
        desc: '组件的唯一标示',
        compute: [Function: bound]
    },
    {
        type: 'String',
        name: 'class',
        desc: '组件的样式类',
        compute: [Function: bound]
    },
    {
        type: 'String',
        name: 'style',
        desc: '组件的内联样式',
        compute: [Function: bound]
    },
    {
        type: 'Boolean',
        name: 'hidden',
    default:
        false,
        desc: '组件是否显示',
        compute: [Function: bound]
    },
    {
        type: 'Any',
        desc: '自定义属性',
        name: [Function: name],
        compute: [Function: bound]
    },
    {
        name: 'type',
        type: 'String',
        desc: 'icon的类型，有效值：success, success_no_circle, info, warn, waiting, cancel, download, search, clear',
        compute: [Function: bound]
    },
    {
        name: 'size',
        type: 'Number',
    default:
        23,
        desc: 'icon的大小，单位px',
        compute: [Function: bound]
    },
    {
        name: 'color',
        type: 'String',
        desc: 'icon的颜色，同css的color',
        compute: [Function: bound]
    }],
    events: {
        tap: {
            type: 'tap',
            bindable: true,
            catchable: true,
            desc: '手指触摸后马上离开'
        },
        longtap: {
            type: 'longtap',
            bindable: true,
            catchable: true,
            desc: '手指触摸后，超过350ms再离开'
        },
        touchstart: {
            type: 'touchstart',
            bindable: true,
            catchable: true,
            desc: '手指触摸动作开始'
        },
        touchmove: {
            type: 'touchmove',
            bindable: true,
            catchable: true,
            desc: '手指触摸后移动'
        },
        touchcancel: {
            type: 'touchcancel',
            bindable: true,
            catchable: true,
            desc: '手指触摸动作被打断，如来电提醒，弹窗'
        },
        touchend: {
            type: 'touchend',
            bindable: true,
            catchable: true,
            desc: '手指触摸动作结束'
        }
    }
}

//计算一个小程序组件的正确属性值，与小程序计算出的值保持一致
var prop = WxaSpec.element.wxaIcon.props.find(prop=>{
    return prop.name == 'size';
});

//23是icon size属性的默认值
prop.compute(null);//23
prop.compute(undefined);//23
prop.compute({});//23
prop.compute('abc');//23

prop.compute('45');//45
prop.compute(10);//10
```