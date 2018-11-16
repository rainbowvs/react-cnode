import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect, Route } from 'react-router-dom';
import { encodeData } from '../../utils';

const Private = ({ userInfo, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={
      props => (
        userInfo.get('id') ? <Component {...props} />
          : <Redirect
              to={{
                pathname: '/login',
                search: encodeData({ from: rest.path })
              }}
            />
      )
    }
  />
);

const mapState = state => {
  return {
    userInfo: state.getIn(['login', 'loginState'])
  }
};

export default withRouter(connect(mapState)(Private));