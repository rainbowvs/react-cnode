import styled from 'styled-components';

export const UserWrapper = styled.div`
  &> .content-box {
    padding-top: 15px;
    margin: 0 auto;
    overflow: hidden;
  }
`;

export const Template = styled.div`
  .main {
    background: #fff;
    padding: 10px;
    .skeleton {
      height: 160px;
    }
  }
  ul{
    border-radius: 3px;
    margin-top: 15px;
    background: #fff;
    padding: 10px;
    li {
      padding: 10px;
      border-top: 1px solid #f6f6f6;
      .skeleton {
        height: 40px;
      }
    }
  }
`;

export const Main = styled.div`
  .title {
    padding: 10px;
    border-radius: 3px 3px 0 0;
    background: #f6f6f6;
    font-size: 16px;
  }
  .container {
    padding: 15px;
    background: #fff;
    border-radius: 0 0 3px 3px;
    overflow: hidden;
    &> .avatar {
      float: left;
    }
    .profile {
      margin-left: 30px;
      float: left;
      p {
        margin: 12px 0;
        font-size: 14px;
        color: #778087;
        a {
          text-decoration: none;
          color: #778087;
        }
        &.name {
          font-size: 20px;
        }
        &.credit {
          span {
            color: ${props => props.theme.themeColor};
          }
        }
      }
    }
  }
`;

export const RecentTopics = styled.div`
  margin: 15px 0;
  &> .title {
    padding: 10px;
    border-radius: 3px 3px 0 0;
    background: #f6f6f6;
    font-size: 16px;
  }
  ul{
    width: 100%;
    background: #fff;
    li {
      width: 100%;
      overflow: hidden;
      line-height: 60px;
      border-top: 1px solid #f6f6f6;
      &.none {
        padding-left: 15px;
      }
      .left {
        width: 85%;
        float: left;
        .writer {
          margin-left: 15px;
          width: 35px;
          height: 35px;
          vertical-align: middle;
        }
        .title {
          margin-left: 15px;
          vertical-align: middle;
          overflow: hidden;
          font-size: 16px;
          display: inline-block;
          max-width: 70%;
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
        width: 15%;
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
  }
`;

export const RecentReplies = RecentTopics.extend``;