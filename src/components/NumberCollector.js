import { Container, Divider, IconButton, Snackbar, Typography, withStyles } from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';
import React, { Component } from 'react';

import FibonacciSolver from './FibonacciSolver';
import NumberInput from './NumberInput';
import NumberList from './NumberList';

const styles = theme => ({
  paper: {
    padding: '1em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

class NumberCollector extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.solver = new FibonacciSolver();
    this.state = {
      numbers: {},
      feedbackMsg: '',
      feedbackOpen: false,
    };
  }

  /**
   *
   * @param {number} theNumber
   * @return {Promse<void>}
   */
  calculateFibonnaciFor = (theNumber) => {
    return this.solver
      .checkIsFibonacciNumber(theNumber)
      .then(isFibonacci => {
        const currentNumbers = this.state.numbers;
        currentNumbers[theNumber].isFibonacci = isFibonacci;
        this.setState({
          numbers: currentNumbers,
          feedbackMsg: isFibonacci
            ? `Is in the Fibonacci Sequence: ${theNumber}`
            : `Is not in the Fibonacci Sequence: ${theNumber}`,
          feedbackOpen: true,
        });
      })
      .catch(() => {
        this.setState({
          feedbackMsg: `Failed to check ${theNumber}`,
          feedbackOpen: true,
        });
      });
  }

  /**
   *
   * @param {*} addedNumber
   * @return {Promse<void>}
   *
   */
  handleOnAdd = (addedNumber) =>{
    let promise;
    const currentNumbers = this.state.numbers;
    if (currentNumbers[addedNumber]) {
      currentNumbers[addedNumber].count += 1;
    } else {
      currentNumbers[addedNumber] = { count: 1, isFibonacci: null };
      promise = this.calculateFibonnaciFor(addedNumber);
    }
    this.setState({
      numbers: currentNumbers,
      feedbackMsg: `Checking: ${addedNumber}`,
      feedbackOpen: true,
    });
    return promise || Promise.resolve();
  }

  handleClearNumbers = () => {
    this.setState({ numbers: {} });
    this.setState({
      feedbackMsg: `Cleared the numbers`,
      feedbackOpen: true,
    })
  }

  render() {
    const { numbers, feedbackMsg, feedbackOpen } = this.state;
    const { classes } = this.props;

    return (
      <Container className={classes.paper}>
        <Typography component="p">
          Enter numbers to check if they are in the&nbsp;
          <a
            href="http://mathworld.wolfram.com/FibonacciNumber.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fibonacci Sequence
          </a>
        </Typography>

        <div className={classes.row}>
          <NumberInput onAdd={this.handleOnAdd} />
          <IconButton
            id="clearNumbersBtn"
            aria-label="clear numbers"
            onClick={e => this.handleClearNumbers(e)}
          >
            <Delete className={classes.rightIcon} />
          </IconButton>
        </div>
        <NumberList numbers={numbers} />
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={feedbackOpen}
          autoHideDuration={3000}
          message={<Typography>{feedbackMsg}</Typography>}
        />
      </Container>
    );
  }
}

export default withStyles(styles)(NumberCollector);
