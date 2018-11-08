import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Content from './components/content';
import Reply from './components/reply';
import Comment from './components/comment';
import { getTopicDetail } from './store/actionCreators'
import {
  TopicWrapper
} from './style';

class Topic extends React.PureComponent {

  componentDidMount() {
    this.props.getInitList(this.props.match.params.id);
  }

  render() {
    const { userInfo } = this.props;
    return (
      <TopicWrapper>
        <div className="content-box">
          <Content></Content>
          <Reply userInfo={userInfo}></Reply>
          { userInfo.get('id') && <Comment userInfo={userInfo}></Comment> }
        </div>
      </TopicWrapper>
    )
  }

}

const mapState = (state) => {
  return {
    userInfo: state.getIn(['login', 'loginState'])
  }
}

const mapDispatch = (dispatch) => {
  return {
    getInitList (id) {
      dispatch(getTopicDetail(id))
    }
  }
}

export default connect(mapState, mapDispatch)(withRouter(Topic));