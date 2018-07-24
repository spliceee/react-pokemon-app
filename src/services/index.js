import { fetchRequest, fetchFailure, fetchSuccess } from '../actions';

const API_URL = 'http://pokeapi.salestock.net/api/v2';

let options = {
  headers: new Headers()
};

export function fetchPokemonsList(){
  return (dispatch) => {
    dispatch(fetchRequest());
    fetch(`${API_URL}/pokemon?limit=20`, options)
      .then(function(response){
        console.log(response.json());
      })
      .catch(function(err){
        console.log(err);
      });
  }
}
