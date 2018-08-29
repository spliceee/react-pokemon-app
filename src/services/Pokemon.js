import { API_URL } from '../App.constants';

class PokemonService {

  fetchPokemons(limit, offset) {
    return fetch(`${API_URL}/pokemon?limit=${limit}&offset=${offset}`, {
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      method: 'GET'
    }).then(response => {
      if ( response.ok ) return response.json();
      return response.json().then((json) => {
        const error = new Error(json.message || response.statusText);
        error.name = '';
        throw error.toString();
      })
    });
  }

}

export default new PokemonService();
