import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import store from './store';
import App from './App';
import './style';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={{ themeColor: '#80bd01' }}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
