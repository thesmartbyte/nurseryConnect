import React, { Component } from 'react';
import Router from 'next/router';
import endPoints from '../../../../api/endPoints';
import injectStyles from '../../../utils/injectStyles';
import styles, { btnCustomStyle, iconStyle } from './NotFound.style';
import Button from '../Button';
import { notFound, cta } from '../../../constants';
import IconImage from '../IconImage';

const goToHome = () => {
  Router.replace('/');
};

class NotFound extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={className}>
      <div className='header'>
        <div className='cnt-wrpr'>
          <IconImage
            data-label='backButton'
            inheritedStyles={iconStyle}
            imageUrl='back.svg'
            onClick={goToHome}
          />
          <span>{cta.goToHome}</span>
        </div>
      </div>
      <img src={`${endPoints.staticAsset}/404.png`} srcSet={`${endPoints.staticAsset}/404.png 1x, ${endPoints.staticAsset}/404@2x.png 2x, ${endPoints.staticAsset}/404@3x.png 3x`} alt='Not Found' />
      <h1>{notFound.notFoundLabel}</h1>
      <p>{notFound.notFoundMessage}</p>
      <Button inheritedStyles={btnCustomStyle} labelText={cta.goToHome} onClick={goToHome} />
    </div>
    );
  }
}

export { NotFound };
export default injectStyles(NotFound, styles);
