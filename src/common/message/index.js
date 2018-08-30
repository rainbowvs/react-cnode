import React from 'react';
import Notification from './components/Notification';
import {
  MessageContent
} from './style';

let newNotification;

// 获取Notification
const getNewNotification = () => {
  // 单例 保持页面始终只有一个Notification
  if (!newNotification) {
    newNotification = Notification.reWrite();
  }
  return newNotification;
};

// notice方法实际上就是集合参数 完成对Notification的改变
const notice = (content, type, icon, duration = 3000, onClose) => {
  let notificationInstance = getNewNotification();

  notificationInstance.notice({
    duration,
    content: !!icon ? (
      <MessageContent type={type}>
        <i></i>
        <span>{content}</span>
      </MessageContent>
    ) : (
      <MessageContent type={type}>
        <span>{content}</span>
      </MessageContent>
    ),
    onClose: () => {
      if (onClose) {
        onClose();
      }
    }
  });
};

export default {
  show(content, duration, icon, onClose) {
    return notice(content, undefined, icon, duration, onClose);
  },
  info(content, duration, icon, onClose) {
    return notice(content, 'info', icon, duration, onClose);
  },
  warning(content, duration, icon, onClose) {
    return notice(content, 'warning', icon, duration, onClose);
  },
  success(content, duration, icon, onClose) {
    return notice(content, 'success', icon, duration, onClose);
  },
  error(content, duration, icon, onClose) {
    return notice(content, 'error', icon, duration, onClose);
  },
  // 销毁
  hide() {
    if (newNotification) {
      newNotification.destroy();
      newNotification = null;
    }
  }
}