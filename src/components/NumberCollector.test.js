import Enzyme, { shallow } from 'enzyme';
import adapter from 'enzyme-adapter-react-16';
import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';

import NumberCollector from './NumberCollector';

Enzyme.configure({ adapter: new adapter() });

describe('NumberCollector', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NumberCollector />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe('the handleOnAdd function', () => {
    it('should calculate the fib value for a new number', async () => {
      const instance = shallow(<NumberCollector />).dive().instance();

      expect(instance.state.numbers[1]).toBeUndefined();

      instance.solver = {
        checkIsFibonacciNumber: () => Promise.resolve(true),
      };

      await instance.handleOnAdd(1);
      expect(instance.state.numbers[1].isFibonacci).toBe(true);
      expect(instance.state.numbers[1].count).toBe(1);
    });

    it('should increment the count and not calculate fib for an existing number', async () => {
      const instance = shallow(<NumberCollector />).dive().instance();

      expect(instance.state.numbers[1]).toBeUndefined();

      instance.solver = {
        checkIsFibonacciNumber: () => Promise.resolve(true),
      };

      await instance.handleOnAdd(1);

      instance.solver = {
        checkIsFibonacciNumber: () => sinon.spy(),
      };

      await instance.handleOnAdd(1);

      expect(instance.state.numbers[1].count).toBe(2);
      expect(!instance.solver.checkIsFibonacciNumber.calledOnce).toBe(true);
    });
  });
});
