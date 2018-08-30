import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import {
  Template,
  ReplyWrapper,
  ReplyList
} from '../style';
import {
  getTimeInterval
} from '../../../utils';

class Reply extends React.Component {

  render() {
    const { detail } = this.props;
    return (
      <Fragment>
        { 
          !detail ? (
            <Template>

            </Template>
          ) : (
            <ReplyWrapper>
              <div className="panel">
                <span>{detail.reply_count} 回复</span>
              </div>
              <ReplyList>
                {
                  detail.replies.map((v, i) => {
                    return (
                      <li key={v.id}>
                        <div className="info">
                          <img src={v.author.avatar_url} alt={v.author.loginname}/>
                          <span className="replier">{v.author.loginname}</span>
                          <span className="floor">{i+1}楼</span>
                          <span className="last-time">{getTimeInterval(v.create_at)}</span>
                        </div>
                        <div className="content">
                          <div className="markdown-body" dangerouslySetInnerHTML={{ __html: v.content }}></div>
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
    )
  }

}

const mapState = (state) => {
  return {
    detail: state.getIn(['topic', 'topicState', 'detail'])
  }
}

export default connect(mapState, null)(Reply);