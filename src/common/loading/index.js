import React from 'react';
import loadingImg from '../../statics/images/loading.svg';
import {
  LoadingWrapper
} from './style';

const Loading = () => {
  return (
    <LoadingWrapper>
      <div className="content">
        <img src={loadingImg} alt="icon" className="icon" />
        <span>loading...</span>
      </div>
    </LoadingWrapper>
  )
}
export default Loading;