import React from 'react';
import { shallow } from 'enzyme';

import InfoModalStyles, { InfoModal } from '../InfoModal';
import THEME from '../../../../styles/theme';

const props = {
  handlePopUp: jest.fn(),
  rightCTA: jest.fn(),
};

describe('InfoModal Atom Test', () => {
  test('Should Render Correctly', () => {
    const infoModal = shallow(<InfoModal {...props} />);
    expect(infoModal).toMatchSnapshot();
  });

  test('Call rightCTAHandler', () => {
    const infoModal = shallow(<InfoModal {...props} />);
    infoModal.instance().rightCTAHandler();
    // TODO: check function called or not
  });

  test('Call handleClickOutside', () => {
    const infoModal = shallow(<InfoModal {...props} />);
    infoModal.instance().handleClickOutside();
    // TODO: check function called or not
  });
});

describe('InfoModal Atom Styled Component Testing', () => {
  test('should render correctly', () => {
    const style = shallow(<InfoModalStyles {...props} theme={THEME} />);
    expect(style).toMatchSnapshot();
  });
});
