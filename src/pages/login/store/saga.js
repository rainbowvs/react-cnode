import { throttle, call,  put } from 'redux-saga/effects';
import { GO_LOGIN } from '../store/actionTypes';
import { loginFetching, setUserInfo } from '../store/actionCreators';
import axios from 'axios';
import Message from '../../../common/message';

function* login(action) {
  yield put(loginFetching(true));
  let res = null;
  try {
    res = yield call(axios.post, `https://cnodejs.org/api/v1/accesstoken?accesstoken=${action.token}`);
  } catch (e) {
    yield put(loginFetching(false));
    if (e.response.status === 401) {
      Message.error(e.response.data.error_msg);
      return false;
    }
    Message.error(e);
    return false;
  }
  if (res.data.success) {
    const data = {
      loginState: {
        avatar: res.data.avatar_url,
        name: res.data.loginname,
        id: res.data.id,
        token: action.token
      }
    };
    yield put(setUserInfo(data));
    window.sessionStorage.setItem('userInfo', JSON.stringify(data))
    Message.success('登录成功');
  } else {
    Message.error(res.data.error_msg);
  }
  yield put(loginFetching(false));
}

export function* watchLogin() {
  yield throttle(1000, GO_LOGIN, login);
}

export default watchLogin;