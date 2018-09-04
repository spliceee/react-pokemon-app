import {
  FETCH_LIST_REQUEST,
  FETCH_LIST_SUCCESS,
  FETCH_BY_ID_REQUEST,
  FETCH_BY_ID_SUCCESS,
  FETCH_FAILURE
} from '../types/Pokemon';

// Fetch list
export const fetchListRequest = (params) => ({
  type: FETCH_LIST_REQUEST,
  payload: params
});
export const fetchListSuccess = (pokemons) => ({
  type: FETCH_LIST_SUCCESS,
  payload: pokemons
});

// Fetch pokemon by ID
export const fetchByIdRequest = (id) => ({
  type: FETCH_BY_ID_REQUEST,
  payload: id
});
export const fetchByIdSuccess = (pokemon) => ({
  type: FETCH_BY_ID_SUCCESS,
  payload: pokemon
});

// Failure
export const fetchFailure = (message) => ({
  type: FETCH_FAILURE,
  payload: message
});