import React from 'react';
import { shallow } from 'enzyme';

import IconImageStyles, { IconImage } from '../IconImage';
import THEME from '../../../../styles/theme';

const props = {};

describe('IconImage Atom Test', () => {
  test('Should Render Correctly', () => {
    const iconImage = shallow(<IconImage {...props} />);
    expect(iconImage).toMatchSnapshot();
  });
});

describe('IconImage Atom Styled Component Testing', () => {
  test('should render correctly', () => {
    const style = shallow(<IconImageStyles {...props} theme={THEME} />);
    expect(style).toMatchSnapshot();
  });
});
