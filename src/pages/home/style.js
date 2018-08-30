import styled from 'styled-components';

export const HomeWrapper = styled.div`
  .content-box {
    padding-top: 15px;
    margin: 0 auto;
    overflow: hidden;
  }
`;

export const Template = styled.div`
  ul {
    li {
      background: #fff;
      padding: 10px;
      border-top: 1px solid #f6f6f6;
      .skeleton {
        height: 40px;
      }
    }
  }
`;

// tab组件
export const Panel = styled.ul`
  user-select: none;
  overflow: hidden;
  padding: 5px 10px;
  background: #f6f6f6;
  border-radius: 3px 3px 0 0;
  li {
    float: left;
    margin: 0 10px;
    color: ${props => props.theme.themeColor};
    cursor: pointer;
    font-size: 18px;
    padding: 4px;
    border-radius: 3px;
    &.active {
      background: ${props => props.theme.themeColor};
      color: #fff;
    }
    &[disabled] {
      pointer-events: none;
    }
  }
`;

export const List = styled.ul`
  width: 100%;
  background: #fff;
  li {
    width: 100%;
    overflow: hidden;
    line-height: 60px;
    border-top: 1px solid #f6f6f6;
    .left {
      width: calc(100% - 66px);
      float: left;
      .writer {
        margin-left: 15px;
        width: 35px;
        height: 35px;
        vertical-align: middle;
      }
      .count {
        display: inline-block;
        width: 100px;
        text-align: center;
        font-size: 14px;
        vertical-align: middle;
        span:nth-child(1) {
          color: #9e78c0;
          
        }
        span:nth-child(2) {
          color: #b4b4b4;
        }
      }
      .title {
        max-width: calc(100% - 150px);
        vertical-align: middle;
        overflow: hidden;
        font-size: 16px;
        display: inline-block;
        white-space: nowrap;
        text-overflow: ellipsis;
        a {
          color: #000;
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
    .right {
      min-width: 66px;
      float: right;
      text-align: right;
      .reply {
        margin-right: 15px;
        font-size: 12px;
        vertical-align: middle;
        color: #778087;
      }
    }
  }
`;

// PaginationWrapper 组件
export const PaginationWrapper = styled.div`
  overflow: hidden;
  padding: 15px 0;
  background: #f6f6f6;
  border-radius: 0 0 3px 3px;
  ul {
    position: relative;
    left: 50%;
    float: left;
  }
  li {
    border-radius: 4px;
    position: relative;
    right: 50%;
    z-index: 2;
    margin: 0 5px;
    float: left;
    min-width: 15px;
    text-align: center;
    display: inline-block;
    padding: 10px 10px;
    font-size: 14px;
    color: #666666;
    border: 1px solid #666666;
    cursor: pointer;
    &.active, &:hover:not(.disabled) {
      color: #fff;
      background: ${props => props.theme.themeColor};
      border-color: ${props => props.theme.themeColor};
    }
    &.disabled {
      cursor: default;
      border-color: transparent;
    }
  }
`;