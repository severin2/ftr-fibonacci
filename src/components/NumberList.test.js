import { TableBody, TableRow } from '@material-ui/core';
import Enzyme, { mount } from 'enzyme';
import adapter from 'enzyme-adapter-react-16';
import React from 'react';
import ReactDOM from 'react-dom';

import NumberList from './NumberList';

Enzyme.configure({ adapter: new adapter() });

describe('NumberList', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NumberList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render a row for each key/val in the numbers prop', () => {
    const numbers = {
      1: { count: 1, isFibonacci: true },
      2: { count: 1, isFibonacci: true },
      3: { count: 1, isFibonacci: true },
    };

    const wrapped = mount(<NumberList numbers={numbers} />);

    const tableBody = wrapped.find(TableBody);
    expect(tableBody.length).toBe(1);

    const tableRows = wrapped.find(TableRow);
    expect(tableRows.length).toBe(4);
  });
});
