import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Notice from './Notice';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class Notification extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      notices: [] // 存储notices
    }
  }

  add (notice) {
    // 添加notice
    // 创造一个不重复的key
    const { notices } = this.state;
    const key = notice.key ? notice.key : notice.key = getUuid();
    const temp = notices.filter((item) => item.key === key).length;

    if (!temp) {
      // 不存在重复的 添加
      const newNotices = [...notices, notice];
      this.setState(() => ({
        notices: newNotices,
      }));
    }
  }

  remove (key) {
    // 根据key删除对应notice
    this.setState(prevState => ({
      notices: prevState.notices.filter(notice => notice.key !== key)
    }));
  }

  getNoticeDOM () {
    const { notices } = this.state;
    let result = [];

    notices.forEach((notice, i) => {
      // 每个Notice onClose的时候 删除掉notices中对应key的notice
      const closeCallback = () => {
        this.remove(notice.key);
        // 如果有用户传入的onClose 执行
        if (notice.onClose) {
          notice.onClose();
        }
      };

      result.push(
        <CSSTransition
          timeout={300}
          classNames="translate"
          key={notice.key}
          onEntered={() => {
            let timer = setTimeout(() => {
              closeCallback();
              clearTimeout(timer);
            }, notice.duration);
          }}
        >
          <Notice order={Number(notice.key.match(/-(.*)$/g)[1])} {...notice} />
        </CSSTransition>
      );
    });

    return result;
  }

  render() {
    const noticesDOM = this.getNoticeDOM();
    return (
      <Fragment>
        <TransitionGroup>
          { noticesDOM }
        </TransitionGroup>
      </Fragment>
    );
  }
}

// 统计notice总数 防止重复
let noticeNumber = 0;

// 生成唯一的id
const getUuid = () => {
  return new Date().getTime() + "-" + noticeNumber++;
};

// Notification增加一个重写方法
// 该方法方便Notification组件动态添加到页面中和重写
Notification.reWrite = (properties) => {
  const { ...props } = properties || {};
  let div;

  div = document.createElement('div');
  document.body.appendChild(div);

  const notification = ReactDOM.render(<Notification {...props} />, div);

  return {
    notice(noticeProps) {
      notification.add(noticeProps);
    },
    removeNotice(key) {
      notification.remove(key);
    },
    destroy() {
      ReactDOM.unmountComponentAtNode(div);
      document.body.removeChild(div);
    },
    component: notification
  }
};

export default Notification;