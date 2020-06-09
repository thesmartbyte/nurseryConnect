

import React, { Component } from 'react';
import Slider from 'nuka-carousel';
import Link from 'next/link';
import get from 'lodash/get';
import Router from 'next/router';
import injectStyles from '../../../utils/injectStyles';
import styles from './Carousel.style';
import endPoints from '../../../../api/endPoints';


class Carousel extends Component {
  static defaultProps = {
    items: [],
    info: { appearance: {} },
    hasControls: false,
    cellAlign: 'left',
    title: '',
    labelRef: '/',
  }

  onLabelClick = () => {
    const { onlabelClick } = this.props;

    if (onlabelClick) onlabelClick();
  }

  labelClickHandler = () => {
    Router.push(this.props.labelRef);
  }

  afterSlide = () => {
    const { afterSlide } = this.props;
    if (afterSlide) afterSlide();
  }
  
  render() {
    const {
      info, hasControls, cellAlign, className, onClick, children, isTitle, itemOnScreenCount, labelRef, dataLabel,
    } = this.props;
    try {
      return (
        <div className={className} data-label={dataLabel}>
          {isTitle && <div className='title-grp'>
          <h3 onClick={ labelRef && this.labelClickHandler }>{info.label}</h3>
          <div onClick={this.onLabelClick}>
            <Link href={labelRef}><a>{get(info, 'cta.label', '')}</a></Link>
          </div>
          </div>}
        <div onClick={onClick}>
        <Slider
          swiping
          afterSlide = {this.afterSlide}
          slidesToScroll={info.appearance.itemsInScreen || itemOnScreenCount}
          renderCenterLeftControls={({ previousSlide }) => (
            hasControls
            && <img
              srcSet= {`${endPoints.staticRoot}/assets/slider_arrow_left.png 1x, ${endPoints.staticRoot}/assets/slider_arrow_left@2x.png 2x, ${endPoints.staticRoot}/assets/slider_arrow_left@3x.png 3x`}
              src= {`${endPoints.staticRoot}/assets/slider_arrow_left.png`}
              alt="Arrow Left"
              className="control-carousel"
              onClick={previousSlide}
            />
          )}
          renderCenterRightControls={({ nextSlide }) => (
            hasControls
            && <img
              srcSet= {`${endPoints.staticRoot}/assets/slider_arrow_left.png 1x, ${endPoints.staticRoot}/assets/slider_arrow_left@2x.png 2x, ${endPoints.staticRoot}/assets/slider_arrow_left@3x.png 3x`}
              src= {`${endPoints.staticRoot}/assets/slider_arrow_left.png`}
              alt="Arrow Left"
              className="control-carousel"
              onClick={nextSlide}
            />
          )}
          renderBottomCenterControls={() => (
            false
          )}
          slidesToShow={info.appearance.itemsInScreen || itemOnScreenCount}
          cellSpacing={10}
          cellAlign={cellAlign}
        >
          {children}
        </Slider>
        </div>
        </div>);
    } catch (err) {
      return null;
    }
  }
}

export { Carousel };
export default injectStyles(Carousel, styles);
