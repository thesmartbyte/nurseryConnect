

import React, { Component } from 'react';
import ContentLoader from 'react-content-loader';
import COLORS from '../../../styles/theme';

const props = {
  speed: 1,
  primaryColor: COLORS.GLOBAL_BACKGROUND_COLOR,
  secondaryColor: COLORS.LIGHT_GREY_3,
};

class Shimmer extends Component {
  render() {
    return (
      <ContentLoader
        speed={props.speed}
        primaryColor={props.primaryColor}
        secondaryColor={props.secondaryColor}
      >
        <rect x="0" y="0" rx="10" ry="10" width="100%" />
      </ContentLoader>
    );
  }
}

export default Shimmer;
