import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';
import { fetchPokemonsList } from './services';

const loggerMiddleware = createLogger()
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
);

// store.dispatch(fetchRequest());
store.dispatch(fetchPokemonsList());

const root = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);

// import registerServiceWorker from './registerServiceWorker';
// registerServiceWorker();
