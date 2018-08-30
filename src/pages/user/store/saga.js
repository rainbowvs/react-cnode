import { takeEvery, call,  put } from 'redux-saga/effects';
import { GET_USER_DETAIL } from '../store/actionTypes';
import { userDetailFetching, setUserDetail } from '../store/actionCreators';
import axios from 'axios';
import Message from '../../../common/message';

function* getUserDetail(action) {
  yield put(userDetailFetching(true));
  let res = null;
  try {
    res = yield call(axios.get, `https://cnodejs.org/api/v1/user/${action.name}`);
  } catch (e) {
    yield put(userDetailFetching(false));
    Message.error(e);
    return false;
  }
  if (res.data.success) {
    yield put(setUserDetail(res.data.data));
  } else {
    Message.error(res.data.error_msg);
  }
  yield put(userDetailFetching(false));
}

export function* watchFetchUserDetail() {
  yield takeEvery(GET_USER_DETAIL, getUserDetail);
}

export default watchFetchUserDetail;