import React, { Component } from 'react';

import './Footbar.css';

import Typography from '@material-ui/core/Typography';

class Footbar extends Component {
  render(){
    const year = new Date().getFullYear();
    return (
      <footer className="Footbar">
        <Typography color="inherit">
          PokemonAPP {year}
        </Typography>
      </footer>
    );
  }
}

export default Footbar;
