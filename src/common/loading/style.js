import styled from 'styled-components';

export const LoadingWrapper = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 9999;
  text-align: center;
  &> .content {
    position: relative;
    right: 50%;
    bottom: 50%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    padding: 7px 10px;
    background: #fff;
    border-radius: 3px;
    line-height: 30px;
    font-size: 16px;
  }
  .icon {
    vertical-align: middle;
    margin-right: 10px;
  }
  span {
    vertical-align: middle;
  }
`;