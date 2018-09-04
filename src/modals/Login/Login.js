import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// Components
import { InputControl } from '../../components';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      loginOpen: props.loginOpen,

      username: '',
      password: ''
    }

    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.loginOpen !== this.props.loginOpen) {
      this.setState({ loginOpen: nextProps.loginOpen })
    }
  }

  handleClose(){
    this.props.handleClose();
  }

  handleChange(type, value){
    this.setState({ [type]: value });
  }

  handleSubmit(evt){
    evt.preventDefault();
    alert('Submit button clicked');
  }

  render(){
    const { loginOpen, username, password } = this.state;
    const { classes } = this.props;

    const errors = {
      username: username.length === 0,
      password: password.length === 0
    }
    const isDisabled = Object.keys(errors).some(x => errors[x]);

    return (
      <Fragment>
        <Modal open={loginOpen} onClose={this.handleClose}>
          <div className={classes.layout}>
            <Paper className={classes.paper}>
              <Typography variant="headline">Login</Typography>
              <form className={classes.form}>
                {/* Username */}
                <InputControl field="username" label="Username" id="loginUsername" required={true} onValue={this.handleChange} />
                {/* Password */}
                <InputControl field="password" label="Password" id="loginPassword" required={true} onValue={this.handleChange} />
                {/* Action button */}
                <Button className={classes.btnLogin}
                        fullWidth
                        variant="raised"
                        color="primary"
                        disabled={isDisabled}
                        onClick={this.handleSubmit}>
                  Login
                </Button>
              </form>
            </Paper>
          </div>
        </Modal>
      </Fragment>
    )
  }
}

Login.propTypes = {
  loginOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
}

const styles = theme => ({
  layout: {
    width: 'auto',
    display: 'block', // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    outline: 0,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing.unit,
  },
  btnLogin: {
    marginTop: theme.spacing.unit * 3,
  }
});

export default withStyles(styles)(Login);