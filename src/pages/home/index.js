import React from 'react';
import Tab from './components/tab';
import {
  HomeWrapper,
} from './style';

const Home = props => {
  return (
    <HomeWrapper>
      <div className="content-box">
        <Tab />
      </div>
    </HomeWrapper>
  )
};

export default Home;