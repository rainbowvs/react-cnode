import * as actionTypes from './actionTypes.js';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  topicState: {
    likeFetching: false,
    detailFetching: false,
    commentFetching: false,
    error: null,
    detail: null,
  }
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.TOPIC_DETAIL_FETCHING:
      return state.setIn(['topicState', 'detailFetching'], action.isFetching);
    case actionTypes.LIKE_STATUS_FETCHING:
      return state.setIn(['topicState', 'likeFetching'], action.isFetching);
    case actionTypes.SET_LIKE_STATUS:
      return state.updateIn(['topicState', 'detail', 'replies'], repliesList => 
        repliesList.update(repliesList.findIndex(reply => 
          reply.get('id') === action.replyId), upVal => 
            upVal.set('is_uped', action.status).update('ups', upsList => 
              (action.status ? upsList.push(action.userId) : upsList.delete( upsList.findIndex(up => up === action.userId) )
            )
          )
        )
      );
    case actionTypes.SET_TOPIC_DETAIL:
      return state.setIn(['topicState', 'detail'], fromJS(action.detail));
    case actionTypes.COMMENT_CONTENT_FETCHING:
      return state.setIn(['topicState', 'commentFetching'], action.isFetching);
    default:
      return state;
  }
}
