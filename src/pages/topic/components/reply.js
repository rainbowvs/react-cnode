import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeLike } from '../store/actionCreators';
import Message from '../../../common/message';
import {
  Template,
  ReplyWrapper,
  ReplyList
} from '../style';
import {
  getTimeInterval
} from '../../../utils';

const Reply = props => {
  const { userInfo, detail, changeLike, likeFetching } = props;
  return (
    <Fragment>
      { 
        !detail ? (
          <Template>

          </Template>
        ) : (
          <ReplyWrapper>
            <div className="panel">
              <span>{detail.get('reply_count')} 回复</span>
            </div>
            <ReplyList>
              {
                detail.get('replies').map((v, i) => {
                  return (
                    <li key={v.get('id')}>
                      <div className="addtion">
                        <button disabled={likeFetching} onClick={() => changeLike(v.get('id'), v.getIn(['author','loginname']), userInfo)} className={`like ${v.get('is_uped') ? 'up' : ''}`}><span>{v.get('ups').size}</span></button>
                      </div>
                      <div className="info">
                        <Link to={`/user/${v.getIn(['author','loginname'])}`}>
                          <img src={v.getIn(['author','avatar_url'])} alt={v.getIn(['author','loginname'])}/>
                        </Link>
                        <span className="replier">
                          <Link to={`/user/${v.getIn(['author','loginname'])}`}>
                            {v.getIn(['author','loginname'])}
                          </Link>
                        </span>
                        <span className="floor">{i+1}楼</span>
                        <span className="last-time">{getTimeInterval(v.get('create_at'))}</span>
                      </div>
                      <div className="content">
                        <div className="markdown-body" dangerouslySetInnerHTML={{ __html: v.get('content') }}></div>
                      </div>
                    </li>
                  )
                })
              }
            </ReplyList>
          </ReplyWrapper>
        )
      }
    </Fragment>
  );
};

const mapState = (state) => {
  return {
    detail: state.getIn(['topic', 'topicState', 'detail']),
    likeFetching: state.getIn(['topic', 'topicState', 'likeFetching'])
  }
}

const mapDispatch = (dispatch, state) => {
  return {
    changeLike(replyId, replierName, userInfo) {
      if (userInfo.get('id')) {
        if (replierName === userInfo.get('name')) {
          Message.warning('您无法给自己点赞');
        } else {
          dispatch(changeLike(userInfo.get('token'), userInfo.get('id'), replyId));
        }
      } else {
        Message.warning('请先登录');
      }
    }
  }
}

export default connect(mapState, mapDispatch)(Reply);