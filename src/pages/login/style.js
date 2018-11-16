import styled from 'styled-components';

export const LoginWrapper = styled.div`
  background: #e1e1e1;
  .content-box {
    padding-top: 15px;
    margin: 0 auto;
    overflow: hidden;
    .panel {
      padding: 10px;
      border-radius: 3px 3px 0 0;
      background: #fff;
      border-bottom: 1px solid #f6f6f6;
    }
    .container {
      background: #fff;
      min-height: 500px;
      text-align: center;
      input {
        margin: 0 auto;
        padding-top: 150px;
        display: block;
        text-align: center;
        width: 80%;
        max-width: 500px;
        height: 35px;
        border: none;
        border-bottom: 2px solid #f6f6f6;
        outline: none;
        font-size: 24px;
        &:focus {
          border-color: ${props => props.theme.themeColor};
        }
        &::placeholder {
          color: #d0d0d0;
        }
      }
      a {
        user-select: none;
        text-align: center;
        text-decoration: none;
        margin: 30px auto;
        display: block;
        width: 80%;
        max-width: 500px;
        height: 35px;
        line-height: 35px;
        font-size: 20px;
        cursor: pointer;
        background: #fff;
        color: ${props => props.theme.themeColor};
        border: 2px solid ${props => props.theme.themeColor};
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
  }
`;