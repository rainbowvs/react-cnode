import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home/loadable';
import Login from './pages/login/loadable';
import Topic from './pages/topic/loadable';
import User from './pages/user/loadable';
import Publish from './pages/publish/loadable';
import Private from './common/private';

const App = props => {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route exact path="/topic/:id" component={Topic} />
        <Route exact path="/user/:name" component={User} />
        <Private path="/publish" component={Publish} />
      </Switch>
    </Fragment>
  );
};

export default App;
