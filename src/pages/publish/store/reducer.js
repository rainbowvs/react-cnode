import * as actionTypes from './actionTypes.js';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  publishState: {
    isFetching: false,
    error: null
  }
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.PUBLISH_FETCHING:
      return state.setIn(['publishState', 'isFetching'], action.isFetching);
    default:
      return state;
  }
}
