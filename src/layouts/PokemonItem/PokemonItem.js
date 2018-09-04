import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import LinearProgress from '@material-ui/core/LinearProgress';

import { fetchByIdRequest } from '../../actions/Pokemon';

class PokemonItem extends Component {
  componentWillMount(){
    const { params } = this.props.match;
    this.props.fetchByIdRequest(params.id)
  }
  render(){
    const { pokemonItem, fetching, fetched, error, message } = this.props;

    if (error && message){
      return <div>{message}</div>
    }

    if (fetching && !fetched){
      return <LinearProgress color="secondary" />
    }

    return (
      <Fragment>
        <div>{JSON.stringify(pokemonItem)}</div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  router: state.router,

  pokemonItem: state.pokemon.pokemonItem,
  fetching: state.pokemon.fetching,
  fetched: state.pokemon.fetched,
  error: state.pokemon.error,
  message: state.pokemon.message
});

function mapDispatchToProps(dispatch){
  return {
    fetchByIdRequest: (id) => dispatch(fetchByIdRequest(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonItem);
