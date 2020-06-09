import React from 'react';
import { shallow } from 'enzyme';

import PopUpStyles, { PopUp } from '../PopUp';
import THEME from '../../../../styles/theme';

const props = {
  handlePopUp: jest.fn(),
  rightCTA: jest.fn(),
};

describe('PopUp Atom Test', () => {
  test('Should Render Correctly', () => {
    const popUp = shallow(<PopUp {...props} />);
    expect(popUp).toMatchSnapshot();
  });


  test('Call rightCTAHandler', () => {
    const popUp = shallow(<PopUp {...props} />);
    popUp.instance().rightCTAHandler();
    // TODO: check function called or not
  });

  test('Call handleClickOutside', () => {
    const popUp = shallow(<PopUp {...props} />);
    popUp.instance().handleClickOutside();
    // TODO: check function called or not
  });
});

describe('PopUp Atom Styled Component Testing', () => {
  test('should render correctly', () => {
    const style = shallow(<PopUpStyles {...props} theme={THEME} />);
    expect(style).toMatchSnapshot();
  });
});
