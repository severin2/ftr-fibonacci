import React from 'react';
import ReactDOM from 'react-dom';
import NumberList from './NumberList';
import ShallowRenderer from 'react-test-renderer/shallow'; // ES6
import { TableBody, TableRow } from '@material-ui/core';

describe('NumberList', () => {

  const renderer = new ShallowRenderer();

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NumberList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render a row for each key/val in the numbers prop', () => {
    const numbers = {
      1: { count: 1, isFibonacci: true},
      2: { count: 1, isFibonacci: true},
      3: { count: 1, isFibonacci: true}
    };
    renderer.render(<NumberList numbers={numbers}/>);
    const result = renderer.getRenderOutput();

    const tableBody = result.findByType(TableBody);
    expect(tableBody.length).toBe(1);

    const tableRows = result.findByType(TableRow);
    expect(tableRows.length).toBe(4)
  });

});
