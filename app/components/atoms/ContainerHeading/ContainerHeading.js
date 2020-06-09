

import React from 'react';
import injectStyles from '../../../utils/injectStyles';
import styles from './ContainerHeading.style';
import EndPoints from '../../../../api/endPoints';

class ContainerHeading extends React.Component {
  render() {
    const {
      heading,
      subHeading,
      className,
      leftTxt,
      onClick,
      subHeading2,
    } = this.props;

    return (
      <div className={className}>
        <div className='top-hdr'>
          <div className='top-hdr__lft'>
            {
              /* Removed for as of now
              <div className='top-hdr__lft__cntr'>
                <div className='top-hdr__lft__cntr__bck' onClick={onClick}/>
                <div>{ leftTxt }</div>
              </div>
               */
            }
            <div className='top-hdr__lft__logo'/>
          </div>
          <img src={`${EndPoints.staticAsset}/login_pizza_image.png`} srcSet={`${EndPoints.staticAsset}/login_pizza_image@2x.png 2x,${EndPoints.staticAsset}/login_pizza_image@3x.png 3x`} className='top-hdr__rght' />
        </div>
        {
          heading
          && <div className='cntnr'>
            <p className='cntnr__hdng'>
              { heading }
            </p>
            <p className='cntnr__sub-hdng'>
              { subHeading }
            </p>
            { subHeading2 && <p className='cntnr__sub-hdng-2'>
              { subHeading2 }
              </p>
            }
          </div>
        }
      </div>
    );
  }
}

export { ContainerHeading };
export default injectStyles(ContainerHeading, styles);
