import Enzyme, { shallow } from 'enzyme';
import adapter from 'enzyme-adapter-react-16';
import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';

import NumberInput from './NumberInput';

Enzyme.configure({ adapter: new adapter() });

describe('NumberInput', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NumberInput />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe('clicking add', () => {
    let wrapper;
    let onAddSpy;
    let instance;
    beforeEach(() => {
      onAddSpy = sinon.spy();
      wrapper = shallow(<NumberInput onAdd={onAddSpy} />);
      instance = wrapper.dive().instance();
    });

    afterEach(() => {
      wrapper && wrapper.unmount();
    });

    it('should call the onAdd prop on click', () => {
      expect(onAddSpy.calledOnce).toBe(false);

      instance.setState({ value: '1' })
;
      instance.handleAddNumber(new MouseEvent(1));

      expect(onAddSpy.calledOnce).toBe(true);

    });
  })

});
