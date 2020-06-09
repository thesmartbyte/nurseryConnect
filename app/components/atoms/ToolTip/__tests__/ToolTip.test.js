import React from 'react';
import { shallow } from 'enzyme';

import ToolTipStyles, { ToolTip } from '../ToolTip';
import THEME from '../../../../styles/theme';

const props = {};

describe('ToolTip Atom Test', () => {
  test('Should Render Correctly', () => {
    const toolTip = shallow(<ToolTip {...props} />);
    expect(toolTip).toMatchSnapshot();
  });
});

describe('ToolTip Atom Styled Component Testing', () => {
  test('should render correctly', () => {
    const style = shallow(<ToolTipStyles {...props} theme={THEME} />);
    expect(style).toMatchSnapshot();
  });
});
