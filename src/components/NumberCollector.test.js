import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import NumberCollector from './NumberCollector';

describe('NumberCollector', () => {

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NumberCollector />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should have the correct initial state', () => {
    const rendered = renderer.create(<NumberCollector/>);
    const instance = rendered.root;

    // expect(comp.numbers).toBeTruthy();
    // expect(comp.feedbackMsg).toBe('');
    // expect(comp.feedbackOpen).toBe(false);
  });

  // it('should instantiate a solver', () => {
  //   const comp = new NumberCollector();
  //   expect(comp.solver).toBeTruthy();
  // });

  // it('should add the result of the fib check to its numbers', async () => {
  //   const comp = new NumberCollector();
  //   comp.solver = {
  //     checkIsFibonacciNumber: jest.fn(() => Promise.resolve(true))
  //   }
  //   comp.state.numbers[1] = {};
  //   await comp.calculateFibonnaciFor(1);

  //   expect(comp.solver.checkIsFibonacciNumber).toHaveBeenCalledWith(1);
  //   expect(comp.state.numbers[1].isFibonacci).toBe(true);
  //   expect(comp.state.feedbackMsg).toBetruthy();
  //   expect(comp.state.feedbackOpen).toBe(true);
  // });

  // it('should handle rejected fib checks', async () => {
  //   const comp = new NumberCollector();
  //   comp.solver = {
  //     checkIsFibonacciNumber: jest.fn(() => Promise.reject(new Error('sad face')))
  //   }
  //   comp.state.numbers[1] = {};
  //   await comp.calculateFibonnaciFor(1);

  //   expect(comp.solver.checkIsFibonacciNumber).toHaveBeenCalledWith(1);
  //   expect(comp.state.feedbackMsg).toBetruthy();
  //   expect(comp.state.feedbackOpen).toBe(true);
  // });

});
