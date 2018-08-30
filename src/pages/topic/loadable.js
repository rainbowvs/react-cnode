import React from 'react';
import Loadable from 'react-loadable';
import Loading from '../../common/loading';

function LoadingComponent(props) {
  if (props.error) {
    // When the loader has errored
    return <div>加载出错</div>;
  } else if (props.timedOut) {
    // When the loader has taken longer than the timeout
    return <div>加载超时</div>;
  } else if (props.pastDelay) {
    // When the loader has taken longer than the delay
    return <Loading />;
  } else {
    // When the loader has just started
    return null;
  }
}

const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading: LoadingComponent
});

export default () => <LoadableComponent/>