import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// Modals
import { Login } from '../../modals';

class Header extends Component {
  constructor(props){
    super(props);

    this.state = {
      loginOpen: false
    }

    this.handleLoginVisible = this.handleLoginVisible.bind(this)
  }
  handleLoginVisible(){
    this.setState({ loginOpen: !this.state.loginOpen });
  }
  render(){
    const { classes } = this.props;
    const { loginOpen } = this.state;
    return (
      <Fragment>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.typo}>
              <Link className={classes.typoLink} to="/">Home</Link>
            </Typography>

            <Button color="inherit" onClick={this.handleLoginVisible}>Login</Button>
            <Button variant="contained" color="secondary">Register</Button>
          </Toolbar>
        </AppBar>

        <Login loginOpen={loginOpen} handleClose={this.handleLoginVisible} />
      </Fragment>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
}

const styles = {
  typo: {
    flexGrow: 1
  },
  typoLink: {
    color: '#ffffff',
    textDecoration: 'none'
  }
};

export default withStyles(styles)(Header);
