import React from 'react';
import { shallow } from 'enzyme';

import ContainerHeadingStyles, { ContainerHeading } from '../ContainerHeading';
import THEME from '../../../../styles/theme';

const props = {};

describe('ContainerHeading Atom Test', () => {
  test('Should Render Correctly', () => {
    const containerHeading = shallow(<ContainerHeading {...props} />);
    expect(containerHeading).toMatchSnapshot();
  });
});

describe('ContainerHeading Atom Styled Component Testing', () => {
  test('should render correctly', () => {
    const style = shallow(<ContainerHeadingStyles {...props} theme={THEME} />);
    expect(style).toMatchSnapshot();
  });
});
