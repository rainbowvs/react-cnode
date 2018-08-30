import styled from 'styled-components';

export const PublishWrapper = styled.div`
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
      padding: 10px;
      select {
        width: 200px;
        border-radius: 4px;
        padding: 5px;
        &:focus {
          outline: none;
        }
      }
      &> #title {
        width: 100%;
        box-sizing: border-box;
        margin: 15px 0;
        padding: 0 10px;
        display: block;
        border-radius: 4px;
        line-height: 30px;
        border: 1px solid #bbb;
      }
      .CodeMirror, .CodeMirror-scroll {
        min-height: 500px;
      }
      .CodeMirror-scroll{
        cursor: text;
      }
      .publish-button {
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
  }
`;