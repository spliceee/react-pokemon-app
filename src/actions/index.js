/*
 * action types
 */

export const FETCH_POKEMON_REQUEST = 'FETCH_POKEMON_REQUEST';
export const FETCH_POKEMON_FAILURE = 'FETCH_POKEMON_FAILURE';
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';

/*
 * action creators
 */

export function fetchRequest(){
  return {
    type: FETCH_POKEMON_REQUEST
  }
}
export function fetchSuccess(list){
  return {
    type: FETCH_POKEMON_SUCCESS,
    payload: {
      list
    }
  }
}
export function fetchFailure(message){
  return {
    type: FETCH_POKEMON_FAILURE,
    payload: {
      message
    }
  }
}
