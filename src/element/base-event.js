export default {
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