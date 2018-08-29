import { call, put, takeLatest } from 'redux-saga/effects';

import { fetchSuccess, fetchFailure } from '../actions/Pokemon';

import PokemonService from '../services/Pokemon';

function* fetchPokemons(action){
  try {
    const data = yield call(PokemonService.fetchPokemons, action.payload);
    yield put(fetchSuccess(data));
  } catch(err) {
    yield put(fetchFailure(err));
  }
}

function* PokemonSaga(){
  yield takeLatest('FETCH_POKEMON_REQUEST', fetchPokemons);
}

export default PokemonSaga;
