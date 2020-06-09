import React from 'react';
import { shallow } from 'enzyme';

import { list } from 'pm2';
import ListDropDownStyles, { ListDropDown } from '../ListDropDown';
import THEME from '../../../../styles/theme';

const props = {
  outsideClick: jest.fn(),
  onInputChange: jest.fn(),
  getDropDownData: jest.fn(),
};

describe('ListDropDown Atom Test', () => {
  test('Should Render Correctly', () => {
    const listDropDown = shallow(<ListDropDown {...props} />);
    expect(listDropDown).toMatchSnapshot();
  });

  test('Call handleClickOutside', () => {
    const listDropDown = shallow(<ListDropDown {...props} />);
    listDropDown.instance().handleClickOutside();
    expect(listDropDown.state().isOpen).toEqual(false);
    // TODO: check function called or not
  });

  test('Call setValue', () => {
    const listDropDown = shallow(<ListDropDown {...props} />);
    listDropDown.instance().setValue('wow');
    expect(listDropDown.state().label).toEqual('wow');
    expect(listDropDown.state().allItems).toEqual(false);
    // TODO: check function called or not
  });

  test('Call toggleList', () => {
    const listDropDown = shallow(<ListDropDown {...props} />);
    listDropDown.state().isOpen = false;
    listDropDown.instance().toggleList();
    expect(listDropDown.state().isOpen).toEqual(true);
  });

  test('Call getAllDropDownData', () => {
    const listDropDown = shallow(<ListDropDown {...props} />);
    listDropDown.instance().getAllDropDownData();
    expect(listDropDown.state().allItems).toEqual(true);
  });

  test('Call onClick', () => {
    const listDropDown = shallow(<ListDropDown {...props} />);
    listDropDown.instance().onClick();
    expect(listDropDown.state().isOpen).toEqual(false);
    // TODO: // check label value
  });
});

describe('ListDropDown Atom Styled Component Testing', () => {
  test('should render correctly', () => {
    const style = shallow(<ListDropDownStyles {...props} theme={THEME} />);
    expect(style).toMatchSnapshot();
  });
});
