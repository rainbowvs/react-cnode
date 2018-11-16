import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import {
  HeaderWrapper,
  Logo,
  Menu
} from './style';
import { setLogout, setUserInfo } from '../../pages/login/store/actionCreators';

class Header extends React.PureComponent {

  componentWillMount() {
    if (window.sessionStorage.getItem('userInfo')) {
      this.props.setLogin(JSON.parse(window.sessionStorage.getItem('userInfo')));
    }
  }

  render() {
    const { userInfo, toLogout } = this.props;
    return (
      <HeaderWrapper className="header">
        <div className="nav content-box">
          <Logo>
            <Link to="/" className="logo"></Link>
          </Logo>
          <Menu>
            {
              userInfo.get('id')
              ? (
                <Link to={`/user/${userInfo.get('name')}`} className="avatar">
                  <img src={userInfo.get('avatar')} alt={userInfo.get('name')} />
                </Link>
              ) : null
            }
            <Link className="new-topic" to="/publish">新建话题</Link>
            {userInfo.get('id') && <button onClick={() => toLogout(this)} className="logout">退出</button>}
            {!userInfo.get('id') && <Link to="/login" className="login">登录</Link>}
          </Menu>
        </div>
      </HeaderWrapper>
    )
  }
}
const mapState = (state) => {
  return {
    userInfo: state.getIn(['login', 'loginState'])
  }
}

const mapDispatch = (dispatch) => {
  return {
    toLogout(that) {
      dispatch(setLogout());
      that.props.history.push('/');
    },
    setLogin(data) {
      dispatch(setUserInfo(data));
    }
  }
}

export default connect(mapState, mapDispatch)(withRouter(Header));