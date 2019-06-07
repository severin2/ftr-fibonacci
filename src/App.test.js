import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import App from './App';
import NumberCollector from './components/NumberCollector';

describe('App', () => {

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should contain the NumberCollector', () => {
    const rendered = renderer.create(<App/>);
    const instance = rendered.root;
    expect(instance.findByType(NumberCollector)).toBeTruthy();
  });

});
