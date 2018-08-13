import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPokemons } from './services';

class App extends Component {
  componentWillMount(){
    this.props.fetchPokemons();
  }
  render() {
    const { pokemons, fetching, fetched } = this.props;

    if (fetching && !fetched) {
      return <div>Loading...</div>
    }

    return (
      <div className="App">
        {pokemons.map((pokemon, index) =>
          <div key={index}>{pokemon.name}</div>
        )}
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

// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App)
