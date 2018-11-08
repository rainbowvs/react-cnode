import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
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

class Content extends React.PureComponent {

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
                  { detail.get('top') && <span>置顶</span> }
                  <h1>{detail.get('title')}</h1>
                </div>
                <div className="article-info">
                  <span>发布于 {getTimeInterval(detail.get('create_at'))}</span>
                  <span className="author">作者 <Link to={`/user/${detail.getIn(['author','loginname'])}`}>{detail.getIn(['author','loginname'])}</Link></span>
                  <span>{detail.get('visit_count')} 次浏览</span>
                  <span>来自 { detail.get('tab')==='share' ? '分享' : '问答' }</span>
                </div>
              </TitleWrapper>
              <ContentWrapper>
                <div className="markdown-body" dangerouslySetInnerHTML={{ __html: detail.get('content') }}></div>
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
    detail: state.getIn(['topic', 'topicState', 'detail'])
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