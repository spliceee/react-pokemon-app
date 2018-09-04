import React, { Component } from 'react';

import './Footer.css';

import Typography from '@material-ui/core/Typography';

class Footer extends Component {
  render(){
    const year = new Date().getFullYear();
    return (
      <footer className="Footer">
        <Typography color="inherit">
          PokemonAPP {year}
        </Typography>
      </footer>
    );
  }
}

export default Footer;
