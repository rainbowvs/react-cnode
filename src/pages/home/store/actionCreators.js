import {
  GET_TOPIC_LIST,
  SET_TOPIC_LIST,
  TOPIC_LIST_FETCHING,
} from './actionTypes.js';

export const getTopicList = (page, tab, limit) => ({
  type: GET_TOPIC_LIST,
  page,
  tab,
  limit
});

export const setTopicList = (data) => ({
  type: SET_TOPIC_LIST,
  data
});

export const topListFetching = (isFetching) => ({
  type: TOPIC_LIST_FETCHING,
  isFetching
});