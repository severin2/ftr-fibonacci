import { IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core';
import FilterList from '@material-ui/icons/FilterList';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

const styles = theme => ({
  space: {
    margin: '1em',
  },
  list: {
    padding: '0',
    margin: '1em'
  },
  listItem: {
    listStyleType: 'none',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export class NumberList extends Component {
  static propTypes = {
    numbers: PropTypes.objectOf(
      PropTypes.shape({
        count: PropTypes.number,
        isFibonacci: PropTypes.bool,
      })
    ),
  };

  constructor(props) {
    super(props);
    this.state = {
      fibsOnly: null,
    };
  }

  /**
   *
   * @param {number} a
   * @param {number} b
   * @return {number}
   */
  numberComparator(a, b) {
    const aAsInt = parseInt(a, 10);
    const bAsInt = parseInt(b, 10);
    if (aAsInt > bAsInt) {
      return -1;
    } else if (aAsInt < bAsInt) {
      return 1;
    } else {
      return 0;
    }
  }

  formatIsFibonnaci(value) {
    if (value === null) {
      return <Typography color="textPrimary">...</Typography>;
    }
    if (value === true) {
      return <Typography color="primary">Yes</Typography>;
    }
    if (value === false) {
      return <Typography color="secondary">No</Typography>;
    }
    return value;
  }

  handleToggleFibs() {
    const { fibsOnly } = this.state;
    let nextValue;
    if (fibsOnly === null) {
      nextValue = true;
    } else if (fibsOnly === true) {
      nextValue = false;
    } else {
      nextValue = null;
    }
    this.setState({ fibsOnly: nextValue });
  }

  get filteredNumbers() {
    const { numbers } = this.props;
    const { fibsOnly } = this.state;
    return Object.keys(numbers).reduce((newNumbers, key) => {
      const value = numbers[key];
      const { isFibonacci } = value;
      if (fibsOnly === null || fibsOnly === isFibonacci) {
        newNumbers[key] = value;
      }
      return newNumbers;
    }, {});
  }

  get filterIcon() {
    const { fibsOnly } = this.state;
    if (fibsOnly === null) {
      return <FilterList color="disabled" />;
    }
    if (fibsOnly === true) {
      return <FilterList color="primary" />;
    }
    if (fibsOnly === false) {
      return <FilterList color="secondary" />;
    }
    return '';
  }

  render() {
    const { classes, numbers } = this.props;
    const keys = Object.keys(this.filteredNumbers).sort(this.numberComparator);
    if (!keys.length) {
      return (
        <div className={classes.space}>
          <Typography>No numbers</Typography>
        </div>
      );
    }
    return (
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="center">Number</TableCell>
            <TableCell align="center">Count</TableCell>
            <TableCell align="center">
              Fibonacci
              <IconButton
                aria-label="toggle filter fibs"
                onClick={e => this.handleToggleFibs(e)}
              >
                {this.filterIcon}
              </IconButton>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {keys.map(key => {
            const { count, isFibonacci } = numbers[key];
            return (
              <TableRow key={key}>
                <TableCell align="center">{key}</TableCell>
                <TableCell align="center">{count}</TableCell>
                <TableCell align="center">
                  {this.formatIsFibonnaci(isFibonacci)}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    );
  }
}

export default withStyles(styles)(NumberList);
