import { IconButton, Input, InputAdornment, Typography, withStyles } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import PropTypes from 'prop-types';
import React from 'react';

const styles = theme => ({});

class NumberInput extends React.Component {
  static propTypes = {
    onAdd: PropTypes.func,
  };

  static defaultProps = {
    onAdd: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      errors: {
        number: false,
        maximum: false,
      },
    };
  }

  /**
   * @returns boolean
   */
  get isStateValid() {
    return this.state.value && !this.state.errors.number;
  }

  /**
   * Bound to the onChange of the number input
   * @param {Event} event
   */
  handleInputChange(event) {
    const value = event.target.value;
    const isNumber = !Number.isNaN(Number(value));

    this.setState({
      value: value,
      errors: {
        number: !isNumber,
      },
    });
  }

  /**
   * Bound to the onClick of the button and onSubmit
   * @param {*} event
   */
  handleAddNumber(event) {
    event.preventDefault();
    if (this.isStateValid) {
      this.props.onAdd(this.state.value);
      this.setState({ value: '' });
    }
  }

  render() {
    const { value, errors } = this.state;
    const valid = this.isStateValid;
    return (
      <form onSubmit={e => this.handleAddNumber(e)} noValidate>
        <FormControl>
          <InputLabel htmlFor="number-input">Enter a Number</InputLabel>
          <Input
            id="number-input"
            value={value}
            onChange={e => this.handleInputChange(e)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  disabled={!valid}
                  aria-label="Add Number Button"
                  onClick={e => this.handleAddNumber(e)}
                >
                  <AddCircleOutline />
                </IconButton>
              </InputAdornment>
            }
          />
          {errors && errors.number && (
            <Typography color="error">Please enter a number</Typography>
          )}
        </FormControl>
      </form>
    );
  }
}

export default withStyles(styles)(NumberInput);
