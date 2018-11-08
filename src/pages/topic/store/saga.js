import { takeEvery, call, put, all } from 'redux-saga/effects';
import { GET_TOPIC_DETAIL, CHANGE_LIKE, SUBMIT_COMMENT_CONTENT } from '../store/actionTypes';
import { topicDetailFetching, likeStatusFetching, setTopicDetail, setLikeStatus, commentContentFetching, getTopicDetail } from '../store/actionCreators';
import axios from 'axios';
import Qs from 'qs';
import Message from '../../../common/message';

function* getTopicDetailGen(action) {
  yield put(topicDetailFetching(true));
  let res = null;
  const token = window.sessionStorage.getItem('userInfo') ? JSON.parse(window.sessionStorage.getItem('userInfo')).loginState.token : null;
  try {
    res = yield call(axios.get, `https://cnodejs.org/api/v1/topic/${action.articleId}${token ? ('?accesstoken=' + token) : ''}`);
  } catch (e) {
    yield put(topicDetailFetching(false));
    Message.error(e);
    return false;
  }
  if (res.data.success) {
    yield put(setTopicDetail(res.data.data));
    const links = document.getElementsByClassName('content-box')[1].getElementsByTagName('a');
    for (var i = 0, len = links.length; i < len; i++) {
      const href = links[i].getAttribute('href');
      if (href) {
        const result = href.match(/^\/user\/(.+)/);
        if (result) {
          links[i].setAttribute('href', `#${href}`);
        }
      }
    }
  } else {
    Message.error(res.data.error_msg);
  }
  yield put(topicDetailFetching(false));
}

function* changeLikeStatus(action) {
  yield put(likeStatusFetching(true));
  let res = null;
  try {
    res = yield call(axios.post, `https://cnodejs.org/api/v1/reply/${action.replyId}/ups?accesstoken=${action.token}`);
  } catch (e) {
    yield put(likeStatusFetching(false));
    Message.error(e);
    return false;
  }
  if (res.data.success) {
    yield put(setLikeStatus(res.data.action === 'up' ? true : false, action.userId, action.replyId));
  } else {
    Message.error(res.data.error_msg);
  }
  yield put(likeStatusFetching(false));
}

function* submitComment(action) {
  yield put(commentContentFetching(true));
  let res = null;
  try {
    res = yield call(axios.post, `https://cnodejs.org/api/v1/topic/${action.topicId}/replies`, Qs.stringify({
      accesstoken: action.token,
      content: action.content
    }));
  } catch (e) {
    yield put(commentContentFetching(false));
    Message.error(e);
    return false;
  }
  if (res.data.success) {
    yield put(getTopicDetail(action.topicId));
    action.mde.value('');
    Message.success('评论成功');
  } else {
    Message.error(res.data.error_msg);
  }
  yield put(commentContentFetching(false));
}

function* watchFetchTopicDetail() {
  yield takeEvery(GET_TOPIC_DETAIL, getTopicDetailGen);
}

function* watchFetchLikeStatus() {
  yield takeEvery(CHANGE_LIKE, changeLikeStatus);
}

function* watchFetchComment() {
  yield takeEvery(SUBMIT_COMMENT_CONTENT, submitComment);
}

export function* watchFetchTopicAll() {
  yield all([
    watchFetchTopicDetail(),
    watchFetchLikeStatus(),
    watchFetchComment()
  ]);
}

