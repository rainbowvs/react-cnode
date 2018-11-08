import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actionCreators';
import {
  PaginationWrapper,
  Template
} from '../style';
import {
  getPagination
} from '../../../utils';

const Pagination = props => {
  const { tab, currentPage, totalPage, choosePage, isFetching } = props;
  if (isFetching) {
    return (
      <Template>
        <div className="skeleton"></div>
      </Template>
    )
  } else {
    return (
      <PaginationWrapper>
        <ul>
          {
            getPagination(currentPage, totalPage).map((v, i) => {
              if (v === currentPage) {
                return <li key={v+i} className="active">{v}</li>
              } else if (v === '...') {
                return <li key={v+i} className="disabled">...</li>
              } else {
                return <li onClick={(c, p, t, l) => choosePage(currentPage, v, tab, 20)} className={v === currentPage ? 'active' : ''} key={v+i}>{v}</li>
              }
            })
          }
        </ul>
      </PaginationWrapper>
    )
  }
};

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
    choosePage(currentPage, page, tab, limit) {
      if (page === '上一页') {
        dispatch(actionCreators.getTopicList(currentPage - 1, tab, limit));
      } else if (page === '下一页') {
        dispatch(actionCreators.getTopicList(currentPage + 1, tab, limit));
      } else {
        dispatch(actionCreators.getTopicList(page, tab, limit));
      }
      window.scroll(0, 0);
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)