
import React, { Component } from 'react';
import injectStyles from '../../../utils/injectStyles';
import styles from './Button.style';

import IconImage from '../IconImage';

class Button extends Component {
  render() {
    const {
      labelText, icon, btnStyle, inheritedStyles, className, img, img2, imgStyle, img2Style, ...otherProps
    } = this.props;

    return (
      <div className={className}>
        <button {...otherProps} className={`${btnStyle} ripple`}>
          {icon && <i className={icon} /> }
          {img && <IconImage inheritedStyles={ imgStyle } imageUrl={img}/>}
          <span>{ labelText }</span>
          {img2 && <IconImage inheritedStyles={ img2Style } imageUrl={img2}/>}
        </button>
      </div>
    );
  }
}

export { Button };
export default injectStyles(Button, styles);
