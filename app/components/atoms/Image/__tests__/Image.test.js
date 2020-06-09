import React from 'react';
import { shallow } from 'enzyme';

import ImgStyles, { Img } from '../Image';
import THEME from '../../../../styles/theme';

const props = {
  blurImage: 'https://api.dominosindia.in/stage-olo-api-bucket/images/home_menulink_vegpizza.png',
  src: 'https://images.dominos.co.in/vegextra.png',
};

describe('Img Atom Test', () => {
  test('Should Render Correctly', () => {
    const img = shallow(<Img {...props} />);
    expect(img).toMatchSnapshot();
  });
});

describe('Img Atom Styled Component Testing', () => {
  test('should render correctly', () => {
    const style = shallow(<ImgStyles {...props} theme={THEME} />);
    expect(style).toMatchSnapshot();
  });
});
