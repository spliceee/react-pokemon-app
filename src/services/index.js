import axios from 'axios';

import {
  fetchRequest,
  fetchFailure,
  fetchSuccess
} from '../actions';

import { API_URL } from '../App.constants';

let options = {
  headers: new Headers()
};

export function fetchPokemons(limit, offset){
  return (dispatch) => {
    dispatch(fetchRequest());
    axios.get(`${API_URL}/pokemon?limit=${limit}&offset=${offset}`, options)
      .then(function(response){
        dispatch(fetchSuccess(response.data));
      })
      .catch(function(err){
        console.log(err);
        dispatch(fetchFailure(err.data.message));
      });
  }
}
