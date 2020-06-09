import React from 'react';
import { shallow } from 'enzyme';

import NotFoundStyles, { NotFound } from '../index';
import THEME from '../../../../styles/theme';

const props = {};

describe('NotFound Atom Test', () => {
  test('Should Render Correctly', () => {
    const notFound = shallow(<NotFound {...props} />);
    expect(notFound).toMatchSnapshot();
  });
});

describe('NotFound Atom Styled Component Testing', () => {
  test('should render correctly', () => {
    const style = shallow(<NotFoundStyles {...props} theme={THEME} />);
    expect(style).toMatchSnapshot();
  });
});
