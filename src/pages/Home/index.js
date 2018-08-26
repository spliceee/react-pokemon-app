import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Home.css';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import TablePagination from '@material-ui/core/TablePagination';

import { fetchPokemons } from '../../services';

class PageHome extends Component {
  constructor(props){
    super(props);

    this.state = {
      page: 0,
      offset: 10,
      rowsPerPage: 10
    };

    this.handleChangePage = this.handleChangePage.bind(this);
    this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
  }

  componentWillMount(){
    const { rowsPerPage, offset } = this.state;
    this.props.fetchPokemons(rowsPerPage, offset);
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
              <Grid item key={index} xs={6} sm={4} md={3} lg={2}>
                <Card className="Card CardPokemon">
                  <CardMedia className="Image"
                             image={`https://img.pokemondb.net/sprites/x-y/normal/${pokemon.name}.png`} />
                  <CardContent className="Content">
                    <Typography gutterBottom variant="headline" component="h2">{'#'+ index +'_'+ pokemon.name}</Typography>
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
  total: state.pokemons.total,
  pokemons: state.pokemons.items,
  fetching: state.pokemons.fetching,
  fetched: state.pokemons.fetched
});

function mapDispatchToProps(dispatch){
  return {
    fetchPokemons: (offset, limit) => dispatch(fetchPokemons(offset, limit))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageHome)
