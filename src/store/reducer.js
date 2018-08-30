import { combineReducers } from 'redux-immutable';
// import { fromJS } from 'immutable';
// import * as actionTypes from './actionTypes.js';
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as topicReducer } from '../pages/topic/store';
import { reducer as loginReducer } from '../pages/login/store';
import { reducer as userReducer } from '../pages/user/store';
import { reducer as publishReducer } from '../pages/publish/store';

// const defaultState = fromJS({
//   showGoTop: false
// });

// const rootReducer = (state = defaultState, action) => {
//   switch (action.type) {
//     case actionTypes.SET_GO_TOP:
//       return state.set('showGoTop', action.showGoTop);
//     default:
//       return state;
//   }
// }

export default combineReducers({
  // root: rootReducer,
  home: homeReducer,
  topic: topicReducer,
  login: loginReducer,
  user: userReducer,
  publish: publishReducer
})