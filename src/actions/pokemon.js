import {
  FETCH_POKEMON_REQUEST,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_FAILURE
} from '../constants/pokemon';

// Fetch pokemons list
export const fetchRequest = () => ({
  type: FETCH_POKEMON_REQUEST
});

export const fetchSuccess = (pokemons) => ({
  type: FETCH_POKEMON_SUCCESS,
  payload: pokemons
});

export const fetchFailure = (message) => ({
  type: FETCH_POKEMON_FAILURE,
  payload: message
});