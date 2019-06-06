import './NumberInput.css';

import PropTypes from 'prop-types';
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { Input, InputAdornment, IconButton } from '@material-ui/core';
import Add from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    flexBasis: 200,
  },
}));

export default class NumberInput extends React.Component {
  static defaultProps = {
    onAdd: () => {}
  };

  static propTypes = {
    onAdd: PropTypes.func
  };

  state = {
    value: '',
  };

  classes = useStyles();

  handleInputChange = (event) => {
    this.setValues({
      value: event.target.value,
    });
  }

  handleClickAddNumber() {
    this.props.onAdd(this.state.value);
  }

  render() {
    const { value } = this.state;
    return (
      <FormControl
        className={clsx(this.classes.root, this.classes.margin, this.classes.textField)}
      >
        <InputLabel htmlFor="number-input">Password</InputLabel>
        <Input
          id="number-input"
          value={value}
          onChange={this.handleInputChange.bind(this)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="Add Number Button"
                onClick={this.handleClickAddNumber.bind(this)}
              >
                <Add />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    );
  }
}
