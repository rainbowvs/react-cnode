import styled from 'styled-components';
import logo from '../../statics/images/logo.svg';

export const HeaderWrapper = styled.div`
  background: #444;
  height: 50px;
  &> .nav.content-box {
    margin: 0 auto;
    overflow: hidden;
  }
`;
export const Logo = styled.div`
  float: left;
  &>a {
    vertical-align: middle;
    display: inline-block;
    width: 120px;
    height: 50px;
    background: url(${logo}) no-repeat 50% 35%;
  }
`;

export const Menu = styled.div`
  float: right;
  font-size: 18px;
  &> .avatar {
    display: inline-block;
    height: 50px;
    text-align: center;
    margin-right: 10px;
    img {
      padding: 5px 0;
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    vertical-align: middle;
  }
  &> .login {
    vertical-align: middle;
    display: inline-block;
    line-height: 50px;
    font-size: 16px;
    text-decoration: none;
    color: #ddd;
    &:hover{
      color: #fff;
    }
  }
  &> .new-topic {
    margin-right: 10px;
    vertical-align: middle;
    line-height: 50px;
    font-size: 16px;
    cursor: pointer;
    color: #ddd;
    text-decoration: none;
    &:hover{
      color: #fff;
    }
  }
  &> .logout {
    vertical-align: middle;
    line-height: 50px;
    font-size: 16px;
    cursor: pointer;
    color: #ddd;
    &:hover{
      color: #fff;
    }
  }
`;