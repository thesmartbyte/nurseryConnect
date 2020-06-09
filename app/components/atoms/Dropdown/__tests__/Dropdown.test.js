import React from 'react';
import { shallow } from 'enzyme';

import DropdownStyles, { Dropdown } from '../Dropdown';
import THEME from '../../../../styles/theme';

const props = {
  clickHandle: jest.fn(),
  list: [],
};

describe('Dropdown Atom Test', () => {
  test('Should Render Correctly', () => {
    const dropdown = shallow(<Dropdown {...props} />);
    expect(dropdown).toMatchSnapshot();
  });

  test('Call toggleList', () => {
    const dropdown = shallow(<Dropdown {...props} />);
    dropdown.instance().toggleList();
    expect(dropdown.state().listOpen).toEqual(true);
  });

  test('Call clickHandle', () => {
    const dropdown = shallow(<Dropdown {...props} />);
    dropdown.instance().clickHandle();
    expect(dropdown.state().listOpen).toEqual(false);
  });

  test('Call handleClickOutside', () => {
    const dropdown = shallow(<Dropdown {...props} />);
    dropdown.state().listOpen = true;
    dropdown.instance().handleClickOutside();
    expect(dropdown.state().listOpen).toEqual(false);
  });
});

describe('Dropdown Atom Styled Component Testing', () => {
  test('should render correctly', () => {
    const style = shallow(<DropdownStyles {...props} theme={THEME} />);
    expect(style).toMatchSnapshot();
  });
});
