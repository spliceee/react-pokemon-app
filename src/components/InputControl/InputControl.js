import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

class InputControl extends Component {
  constructor(props){
    super(props);

    this.state = {
      touched: false,
      error: false,

      field: '',
      label: '',
      id: '',
      required: false,
      type: 'text',

      value: ''
    }

    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount(){
    const { field, label, id, required, type } = this.props;
    this.setState({
      field,
      label,
      id,
      required,
      type
    });
  }

  // componentWillUnmount(){
  //   this.setState({
  //     touched: false,
  //     error: false,

  //     field: '',
  //     label: '',
  //     id: '',
  //     required: false,
  //     type: 'text',

  //     value: ''
  //   });
  // }

  handleBlur(){
    this.setState({
      touched: true
    });
  }

  handleChange(evt){
    const { field } = this.state;
    const { value } = evt.target;
    this.setState({ value });
    this.props.onValue(field, value);
  }

  render(){
    const { label, id, required, type, value, touched } = this.state;

    const hasError = () => {
      return value.length === 0 ? touched : false;
    };

    return (
      <Fragment>
        <FormControl margin="normal" required={required} fullWidth error={hasError() && required}>
          {label ? <InputLabel htmlFor={id}>{label}</InputLabel> : ''}
          <Input id={id} name={id} type={type}
                 onBlur={this.handleBlur}
                 onChange={this.handleChange} />
          {
            hasError() && required ?
              <FormHelperText>This field is required</FormHelperText>
            :
              ''
          }
        </FormControl>
      </Fragment>
    );
  }
}

InputControl.propTypes = {
  field: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  required: PropTypes.bool,
  type: PropTypes.string,
  // Func
  onValue: PropTypes.func.isRequired
}

export default InputControl;
