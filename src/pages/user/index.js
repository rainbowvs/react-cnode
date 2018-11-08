import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserDetail, setUserDetail } from './store/actionCreators'
import {
  UserWrapper,
  Main,
  RecentTopics,
  RecentReplies,
  Template
} from './style';
import { getTimeInterval } from '../../utils';

class User extends React.PureComponent {

  componentDidMount() {
    this.props.getInitData(this.props.match.params.name);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.name !== this.props.match.params.name) {
      this.props.getInitData(nextProps.match.params.name);
    }
  }

  componentWillUnmount() {
    this.props.clearData();
  }

  render() {
    const { userDetail } = this.props;
    return (
      <UserWrapper>
        <div className="content-box">
          {
            !userDetail ? (
              <Template>
                <div className="main">
                  <div className="skeleton"></div>
                </div>
                <ul className="topics">
                  {
                    new Array(5).fill(0).map((v, i) => {
                      return (
                        <li key={v+i+'topics'}>
                          <div className="skeleton"></div>
                        </li>
                      )
                    })
                  }
                </ul>
                <ul className="repiers">
                {
                    new Array(5).fill(0).map((v, i) => {
                      return (
                        <li key={v+i+'repiers'}>
                          <div className="skeleton"></div>
                        </li>
                      )
                    })
                  }
                </ul>
              </Template>
            ) : (
              <Fragment>
                <Main>
                  <div className="title">
                    主页
                  </div>
                  <div className="container">
                    <img className="avatar" src={userDetail.get('avatar_url')} alt={userDetail.get('loginname')}/>
                    <div className="profile">
                      <p className="name">{userDetail.get('loginname')}</p>
                      <p className="credit"><span>{userDetail.get('score')}</span> 积分</p>
                      <p className="github-page">
                        <span>Github </span>
                        <a target="_blank" href={`https://github.com/${userDetail.get('githubUsername')}`}>@{userDetail.get('githubUsername')}</a>
                      </p>
                      <p className="create-time">注册时间 {getTimeInterval(userDetail.get('create_at'))}</p>
                    </div>
                  </div>
                </Main>
                <RecentTopics>
                  <div className="title">
                    最近创建的话题
                  </div>
                  <ul>
                    {
                      userDetail.get('recent_topics').map(v => {
                        return (
                          <li key={v.get('id')}>
                            <div className="left">
                              <img className="writer" src={v.getIn(['author', 'avatar_url'])} title={`作者: ${v.getIn(['author', 'loginname'])}`} alt={`作者: ${v.getIn(['author', 'loginname'])}`} />
                              <span className="title">
                                <Link to={`/topic/${v.get('id')}`}>{v.get('title')}</Link>
                              </span>
                            </div>
                            <div className="right">
                              <span className="reply" title="最后回复时间">{getTimeInterval(v.get('last_reply_at'))}</span>
                            </div>
                          </li>
                        )
                      })
                    }
                    { userDetail.get('recent_topics').size === 0 && <li className="none">无</li> }
                  </ul>
                </RecentTopics>
                <RecentReplies>
                  <div className="title">
                    最近参与的话题
                  </div>
                  <ul>
                    {
                      userDetail.get('recent_replies').map(v => {
                        return (
                          <li key={v.get('id')}>
                            <div className="left">
                              <Link to={`/user/${v.getIn(['author', 'loginname'])}`}>
                                <img className="writer" src={v.getIn(['author', 'avatar_url'])} title={`作者: ${v.getIn(['author', 'loginname'])}`} alt={`作者: ${v.getIn(['author', 'loginname'])}`} />
                              </Link>
                              <span className="title">
                                <Link to={`/topic/${v.get('id')}`}>{v.get('title')}</Link>
                              </span>
                            </div>
                            <div className="right">
                              <span className="reply" title="最后回复时间">{getTimeInterval(v.get('last_reply_at'))}</span>
                            </div>
                          </li>
                        )
                      })
                    }
                    { userDetail.get('recent_replies').size === 0 && <li className="none">无</li> }
                  </ul>
                </RecentReplies>
              </Fragment>
            )
          }
        </div>
      </UserWrapper>
    )
  }

}

const mapState = (state) => {
  return {
    userDetail: state.getIn(['user', 'userState', 'detail'])
  }
}

const mapDispatch = (dispatch) => {
  return {
    getInitData(name) {
      dispatch(getUserDetail(name));
    },
    clearData() {
      dispatch(setUserDetail(null));
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(User));