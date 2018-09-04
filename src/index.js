import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { indigo, blue } from '@material-ui/core/colors';

import store, { history } from './Store';
import App from './App';

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: blue
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);

// import registerServiceWorker from './registerServiceWorker';
// registerServiceWorker();
