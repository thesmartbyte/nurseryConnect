import React from 'react';
import { shallow } from 'enzyme';

import InputStyles, { Input } from '../Input';
import THEME from '../../../../styles/theme';

const props = {
  onChange: jest.fn(),
  onKeyUp: jest.fn(),
  index: 0,
};

const evt = {
  preventDefault: jest.fn(),
  stopPropagation: jest.fn(),
  persist: jest.fn(),
  target: {
    value: 'john',
  },
};

describe('Input Atom Test', () => {
  test('Should Render Correctly', () => {
    const input = shallow(<Input {...props} />);
    expect(input).toMatchSnapshot();
  });

  test('Call onChangeHandler', () => {
    const input = shallow(<Input {...props} />);
    input.instance().onChangeHandler(evt);
    expect(input.state().inputVal).toEqual(evt.target.value);
  });

  test('Call onKeyUpHandler', () => {
    const input = shallow(<Input {...props} />);
    input.instance().onKeyUpHandler(evt);
    expect(input.state().inputVal).toEqual(evt.target.value);
  });
});

describe('Input Atom Styled Component Testing', () => {
  test('should render correctly', () => {
    const style = shallow(<InputStyles {...props} theme={THEME} />);
    expect(style).toMatchSnapshot();
  });
});
