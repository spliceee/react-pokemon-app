import {
  FETCH_LIST_REQUEST,
  FETCH_LIST_SUCCESS,
  FETCH_BY_ID_REQUEST,
  FETCH_BY_ID_SUCCESS,
  FETCH_FAILURE
} from '../types/Pokemon';

const initialState = {
  items: [],
  pokemonItem: null,
  total: 0,
  fetching: false,
  fetched: false,
  error: false,
  message: null
};

const pokemons = (state = initialState, {type, payload}) => {
  switch (type){
    case FETCH_LIST_REQUEST:
    case FETCH_BY_ID_REQUEST:
      return {
        ...state,
        fetching: true
      }
    case FETCH_LIST_SUCCESS:
      return {
        ...state,
        fetched: true,
        items: payload.results,
        total: payload.count
      }
    case FETCH_BY_ID_SUCCESS:
      return {
        ...state,
        fetched: true,
        pokemonItem: payload,
      }
    case FETCH_FAILURE:
      return {
        ...state,
        error: true,
        message: payload
      }
    default:
      return state;
  }
}

export default pokemons;