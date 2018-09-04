import { API_URL } from '../App.constants';

const headers = new Headers({
  'Content-Type': 'application/json'
});

class PokemonService {

  fetchList({limit, offset}){
    return fetch(`${API_URL}/pokemon?limit=${limit}&offset=${offset}`, {
      headers,
      method: 'GET'
    }).then(response => extractData(response));
  }

  fetchByID(id){
    return fetch(`${API_URL}/pokemon/${id}`, {
      headers,
      method: 'GET'
    }).then(response => extractData(response));
  }
}

export default new PokemonService();

function extractData(response){
  if ( response.ok ) return response.json();
  return response.json().then((json) => {
    const error = new Error(json.message || response.statusText);
    error.name = '';
    throw error.toString();
  });
}
