import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";

import store, { history } from './Store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// import registerServiceWorker from './registerServiceWorker';
// registerServiceWorker();
