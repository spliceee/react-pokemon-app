import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Home.css';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import TablePagination from '@material-ui/core/TablePagination';

import { fetchRequest } from '../../actions/Pokemon';

class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      page: 0,
      rowsPerPage: 10,
      offset: 0,
    };

    this.handleChangePage = this.handleChangePage.bind(this);
    this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
  }

  componentWillMount(){
    const { rowsPerPage, offset } = this.state;
    this.props.fetchPokemons({limit: rowsPerPage, offset});
  }

  getIdFromURL(url){
    const arr = url.split('/');
    return `/pokemons/${arr[arr.length - 2]}`;
  }

  // Pagination
  handleChangePage(evt, page){
    const { rowsPerPage } = this.state;
    const offset = page * rowsPerPage;

    this.setState({ page });
    this.setState({ offset });

    this.props.fetchPokemons(rowsPerPage, offset);
  }
  handleChangeRowsPerPage(evt){
    const { value } = evt.target
    const { offset } = this.state;

    this.setState({ rowsPerPage: value });

    this.props.fetchPokemons(value, offset);
  }

  render(){
    const { page, rowsPerPage } = this.state;
    const { total, pokemons, fetching, fetched, error, message } = this.props;

    if (error && message){
      return <div>{message}</div>
    }

    if (fetching && !fetched){
      return <LinearProgress color="secondary" />
    }

    return (
      <div className="Page PageHome">
        <div className="Container">
          <TablePagination
            component="div"
            count={total}
            rowsPerPage={rowsPerPage}
            page={page}
            backIconButtonProps={{
              'aria-label': 'Previous Page',
            }}
            nextIconButtonProps={{
              'aria-label': 'Next Page',
            }}
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
          />

          <Grid container spacing={16}>
            {pokemons.map((pokemon, index) => (
              <Grid key={index} item xs={6} sm={4} md={3} lg={2}>
                <Card className="Card CardPokemon">
                  <CardMedia className="Image" image={`https://img.pokemondb.net/sprites/x-y/normal/${pokemon.name}.png`} />
                  <CardContent className="Content">
                    <Typography gutterBottom variant="headline" component="h2">
                      <Link to={this.getIdFromURL(pokemon.url)}>{pokemon.name}</Link>
                    </Typography>
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
  total: state.pokemon.total,
  pokemons: state.pokemon.items,
  fetching: state.pokemon.fetching,
  fetched: state.pokemon.fetched
});

function mapDispatchToProps(dispatch){
  return {
    fetchPokemons: (offset, limit) => dispatch(fetchRequest(offset, limit))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
