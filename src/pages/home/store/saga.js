import { throttle, call,  put } from 'redux-saga/effects';
import { GET_TOPIC_LIST } from '../store/actionTypes';
import { setTopicList, topListFetching } from '../store/actionCreators';
import axios from 'axios';
import Message from '../../../common/message';

function* getList(action) {
  yield put(topListFetching(true));
  let res = null;
  try {
    res = yield call(axios.get, `https://cnodejs.org/api/v1/topics?page=${action.page}&tab=${action.tab}&limit=${action.limit}`);
  } catch (e) {
    yield put(topListFetching(false));
    Message.error(e);
    return false;
  }
  if (res.data.success) {
    yield put(setTopicList(
      {
        homeState: {
          list: res.data.data,
          tab: {
            page: action.page,
            tab: action.tab,
            limit: action.limit
          },
          pagination: {
            currentPage: action.page,
            totalPage: 10
          }
        }
      }
    ));
  } else {
    Message.error(res.data.error_msg);
  }
  yield put(topListFetching(false));
}

export function* watchFetchTopicList() {
  yield throttle(1000, GET_TOPIC_LIST, getList);
}

export default watchFetchTopicList;