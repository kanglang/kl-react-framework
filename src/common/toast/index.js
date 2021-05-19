/**
 * Created by Aus on 2017/6/13.
 */
import Notification from './Notification'

// Toast组件比较特殊
// 因为<Toast />不会被直接渲染在DOM中
// 而是动态插入页面中
// Toast组件核心就是通过Notification暴露的重写方法 动态改变Notification
let newNotification;

// 获得一个Notification
const getNewNotification = () => {
    // 单例 保持页面始终只有一个Notification
    if (!newNotification) {
        newNotification = Notification.reWrite();
    }

    return newNotification;
};

// notice方法实际上就是集合参数 完成对Notification的改变
const notice = (type, content, mask = false, onClose, duration) => {
    let notificationInstance = getNewNotification();

    notificationInstance.notice({
        duration,
        type,
        mask,
        content,
        onClose: () => {
            if (onClose) onClose();
        },
    });
};

export default {
    // 无动画
    show: (content, mask, duration, onClose) => (
        notice(undefined, content, mask, onClose, duration)
    ),
    // 翻转效果
    info: (content, mask, duration, onClose) => {
        return notice('info', content, mask, onClose, duration)
    },
    // 缩放效果
    success: (content, mask, duration, onClose) => {
        return notice('success', content, mask, onClose, duration)
    },
    // 从下方滑入
    warning: (content, mask, duration, onClose) => (
        notice('warning', content, mask, onClose, duration)
    ),
    // 抖动
    error: (content, mask, duration, onClose) => (
        notice('error', content, mask, onClose, duration)
    ),
    // loading
    loading: (content) => (
        notice('loading', content || '加载中...',false, undefined, 0)
    ),
    // 销毁
    hide() {
        if (newNotification) {
            newNotification.destroy();
            newNotification = null;
        }
    },
}