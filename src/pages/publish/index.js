import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  goPublish
} from './store/actionCreators';
import Message from '../../common/message';
import SimpleMDE from 'simplemde';
import 'simplemde/dist/simplemde.min.css';
import {
  PublishWrapper
} from './style';

class Publish extends React.PureComponent {

  componentDidMount() {
    if (this.props.userInfo.get('id')) {
      this.smde = new SimpleMDE({
        element: this.MdTextarea,
        spellChecker: false,
        placeholder: '在此输入内容...'
      });
    }
  }

  componentWillUnmount() {
    if (this.smde) {
      this.smde.toTextArea();
      this.smde = null;
    }
  }

  render() {
    const { userInfo, submitBlock, isFetching } = this.props;
    if (userInfo.get('id')) {
      return (
        <PublishWrapper>
          <div className="content-box">
            <div className="panel">新建话题</div>
            <div className="container">
              <label htmlFor="block">选择版块：</label>
              <select id="tab" ref={(tab) => this.tabSelect = tab}>
                <option value="ask">问答</option>
                <option value="share">分享</option>
                <option value="job">招聘</option>
                <option value="dev">客户端测试</option>
              </select>
              <input ref={(title) => this.tabTitle = title} id="title" type="text" placeholder="标题字数10字以上" />
              <textarea ref={(textarea) => this.MdTextarea = textarea}></textarea>
              <button disabled={isFetching} onClick={() => submitBlock(this, userInfo.get('token'), this.tabTitle.value, this.tabSelect.value, this.smde.value())} className="publish-button">发 布</button>
            </div>
          </div>
        </PublishWrapper>
      )
    } else {
      return <Redirect to="/login" />
    }
  }

}

const mapState = (state) => {
  return {
    userInfo: state.getIn(['login', 'loginState']),
    isFetching: state.getIn(['publish', 'publishState', 'isFetching'])
  }
}

const mapDispatch = (dispatch) => {
  return {
    submitBlock(com, token, title, tab, content) {
      if (title === '') {
        Message.error('标题不能为空', 1000);
        return false;
      } else if (title.length < 10) {
        Message.error('标题字数10字以上', 1000);
        return false;
      } else if (content === '') {
        Message.error('内容不能为空', 1000);
        return false;
      }
      dispatch(goPublish(com, token, title, tab, content));
    }
  }
}

export default connect(mapState, mapDispatch)(withRouter(Publish))