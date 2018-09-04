import { call, put, takeLatest } from 'redux-saga/effects';

import {
  fetchListSuccess,
  fetchByIdSuccess,
  fetchFailure
} from '../actions/Pokemon';

import PokemonService from '../services/Pokemon';

function* fetchList(action){
  try {
    const data = yield call(PokemonService.fetchList, action.payload);
    yield put(fetchListSuccess(data));
  } catch(err) {
    yield put(fetchFailure(err));
  }
}

function* fetchById(action){
  try {
    const data = yield call(PokemonService.fetchByID, action.payload);
    yield put(fetchByIdSuccess(data));
  } catch(err) {
    yield put(fetchFailure(err));
  }
}

function* PokemonSaga(){
  yield takeLatest('[Pokemon] Fetch request', fetchList);
  yield takeLatest('[Pokemon] Fetch by id', fetchById);
}

export default PokemonSaga;
