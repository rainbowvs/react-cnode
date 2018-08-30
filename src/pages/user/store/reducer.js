import * as actionTypes from './actionTypes.js';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  userState: {
    isFetching: false,
    error: null,
    detail: null
  }
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.USER_DETAIL_FETCHING:
      return state.setIn(['userState', 'isFetching'], action.isFetching);
    case actionTypes.SET_USER_DETAIL:
      return state.setIn(['userState', 'detail'], fromJS(action.detail));
    default:
      return state;
  }
}
