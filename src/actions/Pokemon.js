import {
  FETCH_POKEMON_REQUEST,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_FAILURE
} from '../types/Pokemon';

// Fetch pokemons list
export const fetchRequest = (params) => ({
  type: FETCH_POKEMON_REQUEST,
  payload: params
});

export const fetchSuccess = (pokemons) => ({
  type: FETCH_POKEMON_SUCCESS,
  payload: pokemons
});

export const fetchFailure = (message) => ({
  type: FETCH_POKEMON_FAILURE,
  payload: message
});