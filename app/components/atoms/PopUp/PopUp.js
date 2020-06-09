

import React, { Component } from 'react';
import injectStyles from '../../../utils/injectStyles';
import styles from './PopUp.style';
import clickOutside from '../../../utils/clickOutside';
import Button from '../Button';


class PopUp extends Component {
  static defaultProps = {
    className: '',
    handleClickOutside: () => {},
    leftCTA: () => {},
    rightCTA: () => {},
    handlePopUp: () => {},
  }

  rightCTAHandler = (e) => {
    if (e) {
      e.stopPropagation();
    }
    const { handlePopUp, rightCTA } = this.props;
    handlePopUp(false);
    rightCTA();
  }

  handleClickOutside() {
    this.props.handlePopUp(false);
  }

  render() {
    const {
      className, message, leftCTAText, rightCTAText, headerText, leftCTA, rightCTA, modalBodystyles,
    } = this.props;
    return (
      <div className={className}>
        {headerText && <div className='modal-header'>{headerText}</div> }
        <div className={`modal-message ${modalBodystyles}`}>{message}</div>
        <div className='btn--grp'>
          {leftCTAText && <Button labelText={leftCTAText} btnStyle='btn--gry' onClick={leftCTA} /> }
          {rightCTAText && <Button labelText={rightCTAText} btnStyle='btn--grn' onClick={ this.rightCTAHandler } /> }
        </div>
      </div>
    );
  }
}

export { PopUp };
export default injectStyles(clickOutside(PopUp), styles);
