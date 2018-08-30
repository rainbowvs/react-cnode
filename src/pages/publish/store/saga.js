import { throttle, call,  put } from 'redux-saga/effects';
import { GO_PUBLISH } from '../store/actionTypes';
import { publishFetching } from '../store/actionCreators';
import axios from 'axios';
import Qs from 'qs';
import Message from '../../../common/message';

function* publish(action) {
  yield put(publishFetching(true));
  let res = null;
  try {
    res = yield call(axios.post, `https://cnodejs.org/api/v1/topics`, Qs.stringify({
      accesstoken: action.token,
      title: action.title,
      tab: action.tab,
      content: action.content
    }));
  } catch (e) {
    yield put(publishFetching(false));
    Message.error(e);
    return false;
  }
  if (res.data.success) {
    action.com.props.history.push(`/topic/${res.data.topic_id}`);
    Message.success('发布成功');
  } else {
    Message.error(res.data.error_msg);
  }
  yield put(publishFetching(false));
}

export function* watchPublish() {
  yield throttle(1000, GO_PUBLISH, publish);
}

export default watchPublish;