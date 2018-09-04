import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class PokemonItem extends Component {
  constructor(props){
    super(props);
  }
  render(){
    console.log(this.props);
    const { params } = this.props.match;
    return (
      <Fragment>
        <div>Pokemon ID: {params.id}</div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  router: state.router,
});

export default connect(mapStateToProps)(PokemonItem);
