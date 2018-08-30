import {
  GO_LOGIN,
  SET_LOGOUT,
  SET_USER_INFO,
  LOGIN_FETCHING
} from './actionTypes.js';

export const goLogin = (token) => ({
  type: GO_LOGIN,
  token
});

export const setUserInfo = (data) => ({
  type: SET_USER_INFO,
  data
})

export const loginFetching = (isFetching) => ({
  type: LOGIN_FETCHING,
  isFetching
});

export const setLogout = () => ({
  type: SET_LOGOUT
})