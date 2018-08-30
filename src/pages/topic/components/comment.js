import React from 'react';
import { connect } from 'react-redux';
import { submitCommentContent } from '../store/actionCreators';
import SimpleMDE from 'simplemde';
import Message from '../../../common/message';
import 'simplemde/dist/simplemde.min.css';
import {
  CommentWrapper
} from '../style';

class Comment extends React.Component {

  componentDidMount() {
    this.smde = new SimpleMDE({
      element: this.MdTextarea,
      spellChecker: false,
      placeholder: '在此输入评论...'
    });
  }

  componentWillUnmount() {
    if (!this.smde) {
      this.smde.toTextArea();
      this.smde = null;
    }
  }

  render() {
    const { detail, userInfo, submitComment, commentFetching } = this.props;
    return (
      <CommentWrapper>
        <div className="panel">
          <span>添加评论</span>
        </div>
        <div className="container">
          <textarea ref={(textarea) => this.MdTextarea = textarea}></textarea>
          <button disabled={commentFetching} onClick={() => submitComment(this.smde, detail.get('id'), userInfo, this.smde.value())} className="reply-button">评 论</button>
        </div>
      </CommentWrapper>
    )
  }

}

const mapState = (state) => {
  return {
    detail: state.getIn(['topic', 'topicState', 'detail']),
    commentFetching: state.getIn(['topic', 'topicState', 'commentFetching'])
  }
}

const mapDispatch = (dispatch) => {
  return {
    submitComment(mde, topicId, userInfo, content) {
      if (content === '') {
        Message.error('评论不能为空');
        return false;
      }
      dispatch(submitCommentContent(mde, topicId, userInfo.get('token'), content));
    }
  }
}

export default connect(mapState, mapDispatch)(Comment);