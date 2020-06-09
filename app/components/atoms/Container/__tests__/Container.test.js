import React from 'react';
import { shallow } from 'enzyme';

import ContainerStyles, { Container } from '../Container';
import THEME from '../../../../styles/theme';

const props = {};

describe('Container Atom Test', () => {
  test('Should Render Correctly', () => {
    const container = shallow(<Container {...props} />);
    expect(container).toMatchSnapshot();
  });
});

describe('Container Atom Styled Component Testing', () => {
  test('should render correctly', () => {
    const style = shallow(<ContainerStyles {...props} theme={THEME} />);
    expect(style).toMatchSnapshot();
  });
});
