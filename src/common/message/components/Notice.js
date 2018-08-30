import React from 'react'
import PropTypes from 'prop-types';
import {
  MessageWrapper
} from '../style';

const Notice = (props) => {
  return (
    <MessageWrapper zIndex={props.order} initTop={20} className="container">
      { props.content }
    </MessageWrapper>
  )
}

Notice.propTypes = {
  content: PropTypes.any, // Notice显示的内容
  order: PropTypes.number, // Notice层级,
};

export default Notice