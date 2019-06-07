import React from 'react';
import ReactDOM from 'react-dom';

import NumberCollector from './NumberCollector';

describe('NumberCollector', () => {

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NumberCollector />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});
