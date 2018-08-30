import styled from 'styled-components';

export const MessageWrapper = styled.div`
  position: fixed;
  z-index: ${props => props.zIndex};
  top: ${props => props.initTop}px;
  left: 50%;
  &.translate-enter {
    transform: translate3d(0, -100%, 0);
  }
  &.translate-enter-active {
    transform: translate3d(0, ${props => props.initTop}px, 0);
    transition: all .3s ease-out;
  }
  &.translate-enter-done {
    transform: translate3d(0, ${props => props.initTop}px, 0);
  }
  &.translate-exit {
    transform: translate3d(0, ${props => props.initTop}px, 0);
  }
  &.translate-exit-active {
    transform: translate3d(0, -100%, 0);
    transition: all .3s ease-out;
  }
  &.translate-exit-done {
    transform: translate3d(0, -100%, 0);
  }
`;

export const MessageContent = styled.div`
  position: relative;
  right: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 7px 10px;
  background: #fff;
  border-radius: 3px;
  i {

  }
  span {
    font-size: 16px;
    color: ${props => {
        switch (props.type) {
          case 'info':
            return '#1890ff';
          case 'success':
            return '#52c41a';
          case 'warning':
            return '#faad14';
          case 'error':
            return '#f5222d';
          default:
            return '#666';
        }
      } 
    };
  }
`;