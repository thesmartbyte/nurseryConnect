import React from 'react';
import { shallow } from 'enzyme';

import RadioButtonGroupStyles, { RadioButtonGroup } from '../RadioButtonGroup';
import THEME from '../../../../styles/theme';

const props = {};

describe('RadioButtonGroup Atom Test', () => {
  test('Should Render Correctly', () => {
    const radioButtonGroup = shallow(<RadioButtonGroup {...props} />);
    expect(radioButtonGroup).toMatchSnapshot();
  });
  test('Should Render Correctly when items is not an array', () => {
    props.items = {};
    const radioButtonGroup = shallow(<RadioButtonGroup {...props} />);
    expect(radioButtonGroup).toMatchSnapshot();
  });
  test('Should Render Correctly when items is an array', () => {
    props.items = [{ value: 1 }];
    props.selected = 1;
    const radioButtonGroup = shallow(<RadioButtonGroup {...props} />);
    radioButtonGroup.instance().toggleRadioButton(1);
    radioButtonGroup.instance().setSelected();
    expect(radioButtonGroup).toMatchSnapshot();
  });
});

describe('RadioButtonGroup Atom Styled Component Testing', () => {
  test('should render correctly', () => {
    const style = shallow(<RadioButtonGroupStyles {...props} theme={THEME} />);
    expect(style).toMatchSnapshot();
  });
});
