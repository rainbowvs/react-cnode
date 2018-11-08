import styled from 'styled-components';

export const TopicWrapper = styled.div`
  &> .content-box {
    padding-top: 15px;
    margin: 0 auto;
    overflow: hidden;
  }
`;

export const Template = styled.div`
  .title {
    overflow: hidden;
    padding: 10px;
    background: #fff;
    border-radius: 3px 3px 0 0;
    border-bottom: 1px solid #e5e5e5;
    .skeleton {
      height: 100px;
    }
  }
  .content {
    padding: 10px;
    background: #fff;
    border-radius: 0 0 3px 3px;
    .skeleton {
      height: 400px;
    }
  }
  .reply {
    margin-top: 10px;
    padding: 10px;
    background: #fff;
    border-radius: 3px;
    .skeleton {
      height: 600px;
    }
  }
`;

// content 组件
export const TitleWrapper = styled.div`
  overflow: hidden;
  padding: 10px;
  background: #fff;
  border-radius: 3px 3px 0 0;
  border-bottom: 1px solid #e5e5e5;
  .title-content {
    overflow: hidden;
    span {
      margin: 11px 8px 0 0;
      float: left;
      background: ${props => props.theme.themeColor};
      padding: 2px 4px;
      border-radius: 3px;
      color: #fff;
      font-size: 12px;
    }
    h1 {
      margin: 8px 0;
      float: left;
      font-size: 22px;
      font-weight: bold;
    }
  }
  .article-info {
    margin-bottom: 8px;
    span {
      font-size: 12px;
      color: #838383;
      &.author {
        a {
          color: #838383;
        }
      }
      &::before {
        margin: 0 3px;
        font-size: 16px;
        content: "•";
      }
    }
  }
`;

export const ContentWrapper = styled.div`
  padding: 10px;
  background: #fff;
  border-radius: 0 0 3px 3px;
`;

// reply 组件
export const ReplyWrapper = styled.div`
  margin-top: 10px;
  .panel {
    padding: 10px;
    border-radius: 3px 3px 0 0;
    background: #f6f6f6;
  }
`;

export const ReplyList = styled.ul`
  li {
    position: relative;
    padding: 10px;
    background: #fff;
    border-top: 1px solid #f0f0f0;
    .addtion {
      position: absolute;
      top: 10px;
      right: 40px;
      button {
        border-radius: 3px;
        min-width: 40px;
        line-height: 25px;
        background: #f2f2f2;
        cursor: pointer;
        color: #909090;
        user-select: none;
        span {
          &::before {
            margin-right: 3px;
            vertical-align: top;
            font-size: 12px;
            content: "▲";
          }
        }
        &[disabled] {
          pointer-events: none;
        }
        &.up {
          background: ${props => props.theme.themeColor};
          color: #fff;
        }
      }
    }
    .info {
      overflow: hidden;
      img {
        width: 30px;
        height: 30px;
        vertical-align: middle;
      }
      span {
        margin: 0 5px;
        vertical-align: middle;
        font-size: 14px;
        &.replier {
          margin-left: 10px;
          font-weight: bold;
          a {
            text-decoration: none;
            color: #666;
          }
        }
        &.last-time {
          &::before {
            margin-right: 3px;
            content: "•";
          }
        }
      }
    }
    .content {
      margin-top: 10px;
    }
  }
`;

export const CommentWrapper = ReplyWrapper.extend`
  margin-bottom: 15px;
  &> .container {
    background: #fff;
    .editor-toolbar {
      border-radius: 0;
      border-left: 0;
      border-right: 0;
      border-bottom: 1px solid #bbb;
    }
    .CodeMirror {
      border: none;
    }
    .CodeMirror, .CodeMirror-scroll {
      min-height: 150px;
    }
    .CodeMirror-scroll{
      cursor: text;
    }
    .reply-button {
      margin: 10px 0 10px 10px;
      font-size: 16px;
      padding: 5px 20px;
      cursor: pointer;
      background: #fff;
      border-radius: 3px;
      color: ${props => props.theme.themeColor};
      border: 1px solid ${props => props.theme.themeColor};
      &:active {
        color: #fff;
        background: ${props => props.theme.themeColor};
        border-color: transparent;
      }
      &[disabled] {
        pointer-events: none;
      }
    }
  }
`;