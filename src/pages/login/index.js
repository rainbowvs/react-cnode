import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Message from '../../common/message';
import {
  goLogin
} from './store/actionCreators';
import {
  LoginWrapper
} from './style';

class Login extends React.Component {

  render() {
    const { Login, userInfo, isFetching } = this.props;
    if (userInfo.get('id')) {
      return <Redirect to={`/user/${userInfo.get('name')}`} />
    } else {
      return (
        <LoginWrapper>
          <div className="content-box">
            <div className="panel">登录</div>
            <div className="container">
              <input ref={(input) => this.tokenInput = input} autoFocus spellCheck="false" type="text" placeholder="Access Token" />
              <a disabled={isFetching} onClick={() => Login(this.tokenInput)} href={void(0)}>登录</a>
            </div>
          </div>
        </LoginWrapper>
      )
    }
  }

}

const mapState = (state) => {
  return {
    userInfo: state.getIn(['login', 'loginState']),
    isFetching: state.getIn(['login', 'loginState', 'isFetching'])
  }
}

const mapDispatch = (dispatch) => {
  return {
    Login(e) {
      if (e.value === '') {
        Message.error('Access Token不能为空');
        return false;
      }
      dispatch(goLogin(e.value));
    }
  }
}

export default connect(mapState, mapDispatch)(Login)