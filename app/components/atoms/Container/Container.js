import React, { Component } from 'react';
import injectedStyles from '../../../utils/injectStyles';
import styles from './Container.style';

class Container extends Component {
  render() {
    const {
      children, className, inheritedStyles, contrRef, ...otherProps
    } = this.props;
    return (
      <div ref={ contrRef ? contrRef : '' } className={className} {...otherProps}>
        {children}
      </div>
    );
  }
}

export { Container };
export default injectedStyles(Container, styles);
