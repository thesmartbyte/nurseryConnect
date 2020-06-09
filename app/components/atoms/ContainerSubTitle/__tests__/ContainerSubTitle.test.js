import React from 'react';
import { shallow } from 'enzyme';

import ContainerSubTitleStyles, { ContainerSubTitle } from '../ContainerSubTitle';
import THEME from '../../../../styles/theme';

const props = {};

describe('ContainerSubTitle Atom Test', () => {
  test('Should Render Correctly', () => {
    const containerSubTitle = shallow(<ContainerSubTitle {...props} />);
    expect(containerSubTitle).toMatchSnapshot();
  });
});

describe('ContainerSubTitle Atom Styled Component Testing', () => {
  test('should render correctly', () => {
    const style = shallow(<ContainerSubTitleStyles {...props} theme={THEME} />);
    expect(style).toMatchSnapshot();
  });
});
