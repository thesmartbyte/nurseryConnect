
import React, { Component } from 'react';
import { Link } from '../../../../server/routes';
import injectStyles from '../../../utils/injectStyles';
import styles from './ImageLink.style';



class ImageLink extends Component {
  static defaultProps = {
    src: '',
    alt: 'Image001',
  }

  render() {
    const {
      href, srcSet, alt, className, src, title, prefetch, inheritedStyles, ...otherProps
    } = this.props;
    return (
      <Link route={href}>
        <a className={className}>
          <img srcSet={srcSet} alt={alt} src={src} {...otherProps} />
          {title && <span>{title}</span>}
        </a>
      </Link>
    );
  }
}

export { ImageLink };
export default injectStyles(ImageLink, styles);
