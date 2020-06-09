
import React, { Component } from 'react';
import injectStyles from '../../../utils/injectStyles';
import styles from './ToolTip.style';


class ToolTip extends Component {
  static defaultProps = {
    dataTip: null,
  }

  render() {
    const {
      dataTip, className, children, ...otherProps
    } = this.props;
    return (
      <div className={className}>
        {
          dataTip
            ? <div data-tip={ dataTip }>
            { children }
          </div>
            : <div>
              { children }
            </div>
        }
      </div>
    );
  }
}

export { ToolTip };
export default injectStyles(ToolTip, styles);
