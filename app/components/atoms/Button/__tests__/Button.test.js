import React from 'react';
import { shallow } from 'enzyme';

import ButtonStyles, { Button } from '../Button';
import THEME from '../../../../styles/theme';

const props = {};

describe('Button Atom Test', () => {
  test('Should Render Correctly', () => {
    const button = shallow(<Button {...props} />);
    expect(button).toMatchSnapshot();
  });
});

describe('Buttom Atom Styled Component Testing', () => {
  test('should render correctly', () => {
    const buttonStyles = shallow(<ButtonStyles {...props} theme={THEME} />);
    expect(buttonStyles).toMatchSnapshot();
  });
});
