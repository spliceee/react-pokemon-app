import React, { Component } from 'react';
import { connect } from 'react-redux';

// import { Navbar, Footbar } from './components';
import Navbar from './components/Navbar';
import Footbar from './components/Footbar';

import { fetchPokemons } from './services';

class App extends Component {
  componentWillMount(){
    this.props.fetchPokemons();
  }
  render(){
    const { pokemons, fetching, fetched } = this.props;

    if (fetching && !fetched) {
      return <div>Loading...</div>
    }

    return (
      <div className="App">
        <Navbar />
        <div className="Page">
          {pokemons.map((pokemon, index) =>
            <div key={index}>
              <img src={'https://img.pokemondb.net/sprites/x-y/normal/'+ pokemon.name +'.png'} />
              <h3>{pokemon.name}</h3>
            </div>
          )}
        </div>
        <Footbar />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pokemons: state.pokemons.items,
  fetching: state.pokemons.fetching,
  fetched: state.pokemons.fetched
});

function mapDispatchToProps(dispatch){
  return {
    fetchPokemons: () => dispatch(fetchPokemons())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
