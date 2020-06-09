

import React from 'react';
import injectStyles from '../../../utils/injectStyles';
import styles from './ContainerSubTitle.style';

class ContainerSubTitle extends React.Component {
  static defaultProps = {
    type: 'text',
  }

  render() {
    const {
      type, text, className,
    } = this.props;
    return (
      <div className={className}> { text }</div>
    );
  }
}

export { ContainerSubTitle };
export default injectStyles(ContainerSubTitle, styles);
