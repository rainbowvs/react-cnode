import {
  GO_PUBLISH,
  PUBLISH_FETCHING
} from './actionTypes.js';

export const goPublish = (com, token, title, tab ,content) => ({
  type: GO_PUBLISH,
  com,
  token,
  title,
  tab,
  content
});

export const publishFetching = (isFetching) => ({
  type: PUBLISH_FETCHING,
  isFetching
});