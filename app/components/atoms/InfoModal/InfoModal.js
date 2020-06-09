

import React, { Component } from 'react';
import injectStyles from '../../../utils/injectStyles';
import styles from './InfoModal.style';
import clickOutside from '../../../utils/clickOutside';
import Button from '../Button';

class InfoModal extends Component {
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
      className, message, imageUrl, rightCTAText, imageSrcSet,
    } = this.props;
    return (
      <div className={className}>
        <img src={imageUrl} srcSet={imageSrcSet}/>
        <div className='modal-message'>{message}</div>
        <div className='btn--grp'>
          {rightCTAText && <Button labelText={rightCTAText} btnStyle='btn--gry' onClick={ this.rightCTAHandler } /> }
        </div>
      </div>
    );
  }
}

export { InfoModal };
export default injectStyles(clickOutside(InfoModal), styles);
