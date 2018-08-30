import { all } from 'redux-saga/effects';
import { watchFetchTopicList } from '../pages/home/store/saga';
import { watchFetchTopicAll } from '../pages/topic/store/saga';
import { watchLogin } from '../pages/login/store/saga';
import { watchFetchUserDetail } from '../pages/user/store/saga';
import { watchPublish } from '../pages/publish/store/saga';



function* mySaga() {
  yield all([
    watchFetchTopicList(),
    watchFetchTopicAll(),
    watchLogin(),
    watchFetchUserDetail(),
    watchPublish()
  ])
}

export default mySaga;