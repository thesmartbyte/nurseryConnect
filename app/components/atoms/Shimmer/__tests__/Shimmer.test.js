import React from 'react';
import 'jest-styled-components';
import { shallow } from 'enzyme';
import Shimmer from '../Shimmer';

describe('Shimmer Test', () => {
  test('Should Render Correctly', () => {
    const homePage = shallow(<Shimmer />);
    expect(homePage).toMatchSnapshot();
  });
});
