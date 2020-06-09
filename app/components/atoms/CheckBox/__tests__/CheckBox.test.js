import React from 'react';
import { shallow } from 'enzyme';

import CheckBoxStyles, { CheckBox } from '../CheckBox';
import THEME from '../../../../styles/theme';

const props = {
  selectedValue: jest.fn(),
};

describe('CheckBox Atom Test', () => {
  test('Should Render Correctly', () => {
    const checkBox = shallow(<CheckBox {...props} />);
    expect(checkBox).toMatchSnapshot();
  });

  test('Call toggleCheckBox', () => {
    const checkBox = shallow(<CheckBox {...props} />);
    checkBox.state().selected = true;
    checkBox.instance().toggleCheckBox();
    expect(checkBox.state().selected).toEqual(false);
  });
});

describe('CheckBox Atom Styled Component Testing', () => {
  test('should render correctly', () => {
    const style = shallow(<CheckBoxStyles {...props} theme={THEME} />);
    expect(style).toMatchSnapshot();
  });
});
