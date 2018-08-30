import {
  TOPIC_DETAIL_FETCHING,
  LIKE_STATUS_FETCHING,
  COMMENT_CONTENT_FETCHING,
  GET_TOPIC_DETAIL,
  SET_TOPIC_DETAIL,
  CHANGE_LIKE,
  SET_LIKE_STATUS,
  SUBMIT_COMMENT_CONTENT
} from './actionTypes.js';

export const topicDetailFetching = (isFetching) => ({
  type: TOPIC_DETAIL_FETCHING,
  isFetching
});

export const likeStatusFetching = (isFetching) => ({
  type: LIKE_STATUS_FETCHING,
  isFetching
});

export const commentContentFetching = (isFetching) => ({
  type: COMMENT_CONTENT_FETCHING,
  isFetching
});


export const getTopicDetail = (articleId) => ({
  type: GET_TOPIC_DETAIL,
  articleId
});

export const setTopicDetail = (detail) => ({
  type: SET_TOPIC_DETAIL,
  detail
});

export const submitCommentContent = (mde, topicId, token, content, replyId = null) => ({
  type: SUBMIT_COMMENT_CONTENT,
  mde,
  topicId,
  token,
  content,
  replyId
});

export const changeLike = (token, userId, replyId) => ({
  type: CHANGE_LIKE,
  token,
  userId,
  replyId
});

export const setLikeStatus = (status, userId, replyId) => ({
  type: SET_LIKE_STATUS,
  status,
  userId,
  replyId
});
