
import React, { Component } from 'react';
import styles from './FlashMessage.style';
import injectStyles from '../../../utils/injectStyles';
import { setSessionStorageValue } from '../../../utils/util';
import { navigateTo } from '../../../global/actions';

class FlashMessage extends Component {
  componentDidMount() {
    setTimeout(function()
    { 
      let flashId = document.getElementById('flash');
      if(flashId) {
        flashId.style.transition = '0.9s';
        flashId.style.display = 'none';
        setSessionStorageValue('showFlash', false);
      }
    }, 6000);
  }
  render() {
    const { message, className } = this.props;
    return (
      <div id="flash" className={className}>
        <span className='success'>{message}</span>
      </div>
    );
  }
}

export default injectStyles(FlashMessage, styles);
