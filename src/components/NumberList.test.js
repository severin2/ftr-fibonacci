import React from 'react';
import ReactDOM from 'react-dom';
import NumberList from './NumberList';

describe('NumberList', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NumberList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
