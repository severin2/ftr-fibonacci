import React from 'react';
import ReactDOM from 'react-dom';

import NumberInput from './NumberInput';

describe('NumberInput', () => {

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NumberInput />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});
