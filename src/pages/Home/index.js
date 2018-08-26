import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Home.css';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';

import { fetchPokemons } from '../../services';

class PageHome extends Component {
  componentWillMount(){
    this.props.fetchPokemons();
  }
  render(){
    const { pokemons, fetching, fetched, error, message } = this.props;

    if (error && message){
      return <div>{message}</div>
    }

    if (fetching && !fetched){
      return <LinearProgress color="secondary" />
    }

    return (
      <div className="Page PageHome">
        <div className="Container">
          <Grid container spacing={16}>
            {pokemons.map((pokemon, index) => (
              <Grid item key={index} xs={6} sm={4} md={3} lg={2}>
                <Card className="Card CardPokemon">
                  <CardMedia className="Image"
                             image={`https://img.pokemondb.net/sprites/x-y/normal/${pokemon.name}.png`} />
                  <CardContent className="Content">
                    <Typography gutterBottom variant="headline" component="h2">{pokemon.name}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(PageHome)
