import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import 'github-markdown-css';
import { setTopicDetail } from '../store/actionCreators';
import {
  Template,
  TitleWrapper,
  ContentWrapper
} from '../style';
import {
  getTimeInterval
} from '../../../utils';

class Content extends React.Component {

  componentWillUnmount() {
    this.props.removeDetail();
  }
  
  render() {
    const { detail } = this.props;
    return (
      <Fragment>
        { 
          !detail ? (
            <Template>
              <div className="title">
                <div className="skeleton"></div>
              </div>
              <div className="content">
                <div className="skeleton"></div>
              </div>
              <div className="reply">
                <div className="skeleton"></div>
              </div>
            </Template>
          ) : (
            <Fragment>
              <TitleWrapper>
                <div className="title-content">
                  { detail.top && <span>置顶</span> }
                  <h1>{detail.title}</h1>
                </div>
                <div className="article-info">
                  <span>发布于{getTimeInterval(detail.create_at)}</span>
                  <span>作者<NavLink to="/user">{detail.author.loginname}</NavLink>
                  </span>
                  <span>{detail.visit_count} 次浏览</span>
                  <span>来自 { detail.tab==='share' ? '分享' : '问答' }</span>
                </div>
                <button>收藏</button>
              </TitleWrapper>
              <ContentWrapper>
                <div className="markdown-body" dangerouslySetInnerHTML={{ __html: detail.content }}></div>
              </ContentWrapper>
            </Fragment>
          )
        }
      </Fragment>
    )
  }

}

const mapState = (state) => {
  return {
    detail: state.getIn(['topic', 'topicState', 'detail']),
    isFetching: state.getIn(['topic', 'topicState', 'isFetching'])
  }
}
const mapDispatch = (dispatch) => {
  return {
    removeDetail() {
      dispatch(setTopicDetail(null));
    }
  }
}

export default connect(mapState, mapDispatch)(Content);