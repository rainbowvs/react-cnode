import React, { Fragment } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Pagination from './pagination';
import * as actionCreators from '../store/actionCreators';
import {
  Panel,
  List,
  Template
} from '../style';
import {
  getTimeInterval
} from '../../../utils';

class Tab extends React.PureComponent {

  componentDidMount() {
    if (this.props.list.size === 0) {
      this.props.getInitList(1, 'all', 20);
    }
  }

  render() {
    const { list, tab, chooseTab, isFetching } = this.props;
    return (
      <Fragment>
        <Panel>
          <li disabled={isFetching} onClick={() => chooseTab(tab, 1, 'all', 20)} className={tab === 'all' ? 'active' : ''}>全部</li>
          <li disabled={isFetching} onClick={() => chooseTab(tab, 1, 'good', 20)} className={tab === 'good' ? 'active' : ''}>精华</li>
          <li disabled={isFetching} onClick={() => chooseTab(tab, 1, 'share', 20)} className={tab === 'share' ? 'active' : ''}>分享</li>
          <li disabled={isFetching} onClick={() => chooseTab(tab, 1, 'ask', 20)} className={tab === 'ask' ? 'active' : ''}>问答</li>
          <li disabled={isFetching} onClick={() => chooseTab(tab, 1, 'job', 20)} className={tab === 'job' ? 'active' : ''}>招聘</li>
          <li disabled={isFetching} onClick={() => chooseTab(tab, 1, 'dev', 20)} className={tab === 'dev' ? 'active' : ''}>客户端测试</li>
        </Panel>
        {
          isFetching ? (
            <Template>
              <ul>
                {
                  new Array(15).fill(0).map((v, i) => {
                    return (
                      <li key={v+i+'ts'}>
                        <div className="skeleton"></div>
                      </li>
                    )
                  })
                }
              </ul>
            </Template>
          ) : (
            <Fragment>
              <List>
                {
                  list.map(v => {
                    return (
                      <li key={v.get('id')}>
                        <div className="left">
                          <Link to={`/user/${v.getIn(['author', 'loginname'])}`}>
                            <img className="writer" src={v.getIn(['author', 'avatar_url'])} title={`作者: ${v.getIn(['author', 'loginname'])}`} alt={`作者: ${v.getIn(['author', 'loginname'])}`} />
                          </Link>
                          <span className="count">
                            <span title="回复数">{v.get('reply_count')}</span>/<span title="点击数">{v.get('visit_count')}</span>
                          </span>
                          <span className="title">
                            <NavLink to={`/topic/${v.get('id')}`}>{v.get('title')}</NavLink>
                          </span>
                        </div>
                        <div className="right">
                          <span className="reply" title="最后回复时间">{getTimeInterval(v.get('last_reply_at'))}</span>
                        </div>
                      </li>
                    )
                  })
                }
              </List>
              <Pagination></Pagination>
            </Fragment>
          )
        }
      </Fragment>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home', 'homeState', 'list']),
    tab: state.getIn(['home', 'homeState','tab', 'tab']),
    currentPage: state.getIn(['home', 'homeState', 'pagination', 'currentPage']),
    totalPage: state.getIn(['home', 'homeState', 'pagination', 'totalPage']),
    isFetching: state.getIn(['home', 'homeState', 'isFetching'])
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    getInitList(page, tab, limit) {
      dispatch(actionCreators.getTopicList(page, tab, limit));
    },
    chooseTab(currentTab, page, tab, limit) {
      switch (currentTab) {
        case tab:
          return false;
        default:
          dispatch(actionCreators.getTopicList(page, tab, limit));
          break;
      }
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Tab)