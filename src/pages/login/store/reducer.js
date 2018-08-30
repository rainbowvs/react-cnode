import * as actionTypes from './actionTypes.js';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  loginState: {
    isFetching: false,
    error: null,
    avatar: null,
    name: null,
    id: null,
    token: null
  }
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER_INFO:
      return state.mergeDeep(action.data);
    case actionTypes.SET_LOGOUT:
      window.sessionStorage.removeItem('userInfo');
      return state.mergeDeep({
        loginState: {
          avatar: null,
          name: null,
          id: null,
          token: null
        }
      });
    case actionTypes.LOGIN_FETCHING:
      return state.setIn(['loginState', 'isFetching'], action.isFetching);
    default:
      return state;
  }
}
