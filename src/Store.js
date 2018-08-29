import { createStore, combineReducers, applyMiddleware } from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";

import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';

import { composeWithDevTools } from 'redux-devtools-extension';

// Reducers
import rootReducers from './reducers';
// Saga
import PokemonSaga from './sagas/Pokemon';

export const history = createHistory();

const sagaMiddleware = createSagaMiddleware()
const middleware = [routerMiddleware(history), sagaMiddleware];

export default createStore(
  combineReducers({
    ...rootReducers,
    router: routerReducer
  }),
  composeWithDevTools(
    applyMiddleware(
      ...middleware
    )
  )
);

sagaMiddleware.run(PokemonSaga);
