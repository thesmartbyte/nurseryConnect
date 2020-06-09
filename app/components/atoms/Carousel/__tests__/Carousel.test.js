import React from 'react';
import { shallow } from 'enzyme';

import CarouselStyles, { Carousel } from '../Carousel';
import THEME from '../../../../styles/theme';

const props = {
  hasControls: true,
  isTitle: true,
  onlabelClick: () => {},
  afterSlide: () => {},
};

describe('Carousel Atom Test', () => {
  test('Should Render Correctly', () => {
    const carousel = shallow(<Carousel {...props} />);
    carousel.instance().labelClickHandler();
    carousel.instance().onLabelClick(...props);
    carousel.instance().afterSlide(...props);
    expect(carousel).toMatchSnapshot();
  });
  test('Should Render Correctly with labelClickHandler', () => {
    const carousel = shallow(<Carousel {...props} />);
    carousel.instance().labelClickHandler();
    expect(carousel).toMatchSnapshot();
  });
  test('Should Render Correctly with onLabelClick', () => {
    const carousel = shallow(<Carousel {...props} />);
    carousel.instance().onLabelClick(...props);
    expect(carousel).toMatchSnapshot();
  });
  test('Should Render Correctly with afterSlide', () => {
    const carousel = shallow(<Carousel {...props} />);
    carousel.instance().afterSlide(...props);
    expect(carousel).toMatchSnapshot();
  });
  test('Should Render Correctly with hasControl as False', () => {
    props.hasControls = false;
    const carousel = shallow(<Carousel {...props} />);
    expect(carousel).toMatchSnapshot();
  });
});

describe('Carousel Atom Styled Component Testing', () => {
  test('should render correctly', () => {
    const style = shallow(<CarouselStyles {...props} theme={THEME} />);
    expect(style).toMatchSnapshot();
  });
});
