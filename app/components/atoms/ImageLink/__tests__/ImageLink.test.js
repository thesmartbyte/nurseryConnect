import React from 'react';
import { shallow } from 'enzyme';

import ImageLinkStyles, { ImageLink } from '../ImageLink';
import THEME from '../../../../styles/theme';

const props = {};

describe('ImageLink Atom Test', () => {
  test('Should Render Correctly', () => {
    const imageLink = shallow(<ImageLink {...props} />);
    expect(imageLink).toMatchSnapshot();
  });
});

describe('ImageLink Atom Styled Component Testing', () => {
  test('should render correctly', () => {
    const style = shallow(<ImageLinkStyles {...props} theme={THEME} />);
    expect(style).toMatchSnapshot();
  });
});
