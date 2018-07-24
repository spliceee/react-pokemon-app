import { FETCH_POKEMON_REQUEST, FETCH_POKEMON_SUCCESS, FETCH_POKEMON_FAILURE } from '../actions';

const initialState = {
  list: [],
  fetching: false,
  fetched: false,
  error: false,
  message: null
};

const pokemons = (state = initialState, {type, payload}) => {
  switch (type){
    case FETCH_POKEMON_REQUEST:
      return {
        ...state,
        fetching: true
      }
    case FETCH_POKEMON_FAILURE:
      return {
        ...state,
        error: true,
        message: payload.message
      }
    case FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        fetched: true,
        list: payload.list
      }
    default:
      return state;
  }
}

export default pokemons;