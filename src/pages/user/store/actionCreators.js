import {
  USER_DETAIL_FETCHING,
  GET_USER_DETAIL,
  SET_USER_DETAIL,
} from './actionTypes.js';

export const userDetailFetching = (isFetching) => ({
  type: USER_DETAIL_FETCHING,
  isFetching
});

export const getUserDetail = (name) => ({
  type: GET_USER_DETAIL,
  name
})

export const setUserDetail = (detail) => ({
  type: SET_USER_DETAIL,
  detail
})