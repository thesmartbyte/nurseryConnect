import React, { Component, Children } from 'react';
import injectStyles from '../../../utils/injectStyles';
import styles from './IconImage.style';

class IconImage extends Component {
  static defaultProps = {
    onClick: () => {},
  };

  render() {
    const {
      className, onClick, imageUrl, inheritedStyles, children, ...otherProps
    } = this.props;
    return (
      <div className={className} onClick={onClick} {...otherProps}>
        { children }
      </div>
    );
  }
}

export { IconImage };
export default injectStyles(IconImage, styles);
