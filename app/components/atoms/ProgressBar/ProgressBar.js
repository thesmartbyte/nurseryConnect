import React, { Component, Fragment } from 'react';
import get from 'lodash/get';
import injectStyles from '../../../utils/injectStyles';
import styles, { btnStyles } from './ProgressBar.style';
import Button from '../Button/Button';
import { cta } from '../../../constants';

// speed in ms
class ProgressBar extends Component  {
  componentDidMount() {
    this.moveBar();
  }

  intervalId=0

  barRef = React.createRef();

  moveBar = () => {
    try {
      const { progressComplete } = this.props;
      var elem = get(this.barRef,'current') || { style: {}}; 
      var width = 1;
      this.intervalId = setInterval(() => {
        if (width >= 75) {
          progressComplete();
          clearInterval(this.intervalId);
        } else {
          width++; 
          elem.style.width = width + '%'; 
        }
      }, 30);
    } catch(e) {
      console.log("Error Occured in ProgressBar");
    }
    
  }

  cancelProgress = () => {
    clearInterval(this.intervalId);
    this.props.cancelProgress();
  }

  render() {
    const { className } = this.props;
    return (
      <Fragment>
        <div className='overlay' />
        <div className={className}>
          <div ref={this.barRef} className='prgrs-br' />
          <Button 
            labelText={cta.cancel} 
            btnStyle='btn--grn' 
            onClick={this.cancelProgress} 
            inheritedStyles={btnStyles} 
          />
        </div>
      </Fragment>
    );
  }
  
}
export default injectStyles(ProgressBar, styles);
