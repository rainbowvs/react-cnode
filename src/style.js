import styled, { injectGlobal } from 'styled-components';
injectGlobal`
  /* Reset */
  body {
    margin: 0;
  }
  ul {
    list-style: none;
    margin:0;
    padding:0;
  }
  table {
    border-collapse: collapse;
  }
  input {
    border: none;
    &:focus {
      outline: none;
    }
  }
  button {
    padding: 0;
    border: none;
    background: none;
    &:focus {
      outline: none;
    }
  }

  /* Custom CSS */
  html,input,button,textarea {
    font-family: Microsoft YaHei;
  }
  
  html {
    height: 100%;
    overflow-y: scroll;
  }
  
  body {
    min-height: 100%;
    background: #e1e1e1;
  }

  @keyframes placeHolderShimmer{
    0%{
      background-position: 0px 0
    }
    100%{
      background-position: 1200px 0
    }
  }
  
  /* skeleton */
  .skeleton {
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background: #f6f7f8;
    background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
    background-size: 1200px 1px;
    position: relative;
  }
  
  @media screen and (min-width: 769px) {
    .content-box {
      max-width: 80%;
    }
  }
  @media screen and (min-width: 0) and (max-width: 768px) {
    .content-box {
      max-width: 100%;
    }
    .nav.content-box div:first-child {
      margin-left: 10px;
    }
    .nav.content-box div+div {
      margin-right: 10px;
    }
  }

`
export const GoTop = styled.button`
  display: ${props => props.show};
  width: 40px;
  line-height: 40px;
  position: fixed;
  font-size: 30px;
  color: #fff;
  background: ${props => props.theme.themeColor};
  opacity: 0.5;
  right: 5%;
  bottom: 100px;
  cursor: pointer;
`;
