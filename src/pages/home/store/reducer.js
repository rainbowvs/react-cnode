import * as actionTypes from './actionTypes.js';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  homeState: {
    isFetching: false,
    error: null,
    list: [],
    tab: {
      page: 1,
      tab: 'all',
      limit: 20
    },
    pagination: {
      currentPage: 1,
      totalPage: 10
    }
  }
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SET_TOPIC_LIST:
      return state.mergeDeep(action.data);
    case actionTypes.TOPIC_LIST_FETCHING:
      return state.setIn(['homeState', 'isFetching'], action.isFetching);
    default:
      return state;
  }
}
