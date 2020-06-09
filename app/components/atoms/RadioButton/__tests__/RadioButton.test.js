import React from 'react';
import { shallow } from 'enzyme';

import RadioButtonStyles, { RadioButton } from '../RadioButton';
import THEME from '../../../../styles/theme';

const props = {
  selectedValue: jest.fn(),
  selected: false,
  item: {},
};

describe('RadioButton Atom Test', () => {
  test('Should Render Correctly', () => {
    const radioButton = shallow(<RadioButton {...props} />);
    expect(radioButton).toMatchSnapshot();
  });

  test('Call toggleRadioButton', () => {
    const radioButton = shallow(<RadioButton {...props} />);
    radioButton.instance().toggleRadioButton(true);
    expect(radioButton.state().selected).toEqual(true);
  });
});

describe('RadioButton Atom Styled Component Testing', () => {
  test('should render correctly', () => {
    const style = shallow(<RadioButtonStyles {...props} theme={THEME} />);
    expect(style).toMatchSnapshot();
  });
});
