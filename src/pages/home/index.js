import React from 'react';
import Tab from './components/tab';
import {
  HomeWrapper,
} from './style';

export default class Home extends React.Component {

  render() {
    return (
      <HomeWrapper>
        <div className="content-box">
          <Tab />
        </div>
      </HomeWrapper>
    )
  }
  
}