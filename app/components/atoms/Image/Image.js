{ /* eslint-disable */}

import React, { Component } from 'react';
import styles from './Image.style';
import injectStyles from '../../../utils/injectStyles';
import { loadedImages, loadedBlurImages } from '../../../utils/util';

class Img extends Component {

	imageQueue = []

	blurImageQueue = []

	state = {
		loadedImages: loadedImages,
		loadedBlurImages: loadedBlurImages
	}

	componentDidMount = () => {
		this.loadImage = (path, isBlurImage) => {
			const {loadedImages, loadedBlurImages} = this.state;
			const img = new Image();
	
			img.onload = () => {
				if(isBlurImage) {
					loadedBlurImages[path] = true
					this.setState({loadedBlurImages: loadedBlurImages});
				} else {
					loadedImages[path] = true;
					this.setState({loadedImages: loadedImages});
				}
			};
	
			img.onerror = (err) => {
			};
	
			img.src = path;
		}

		this.imageQueue.forEach((src) => this.loadImage(src));
		this.blurImageQueue.forEach((src) => this.loadImage(src, true));
	}

	onLoad = () => {
		const {onLoad} = this.props;
		if(onLoad) onLoad();
	}

  render() {
	const { className, src, srcSet, blurImage, defaultImage, defaultImageSrcSet, alt, inheritedStyle,} = this.props;
	const { loadedImages, loadedBlurImages } = this.state;
	
	let imageSrcSet = defaultImageSrcSet || null;
	let displayImage = defaultImage || blurImage || src;
	displayImage = loadedImages[src] ? src : (loadedBlurImages[blurImage] ? blurImage : displayImage);

	if(displayImage != src) {
		if(blurImage && !loadedBlurImages[blurImage]) {
			!this.loadImage ? this.blurImageQueue.push(blurImage) : this.loadImage(blurImage, true);
		}
		!this.loadImage ? this.imageQueue.push(src) : this.loadImage(src);
	} else {
		imageSrcSet = srcSet || null;
	}
		return (
		<div className={className}>
			<img onLoad={this.onLoad} src={displayImage} srcSet={imageSrcSet} alt={alt} className="wd-100"/>
		</div>
	);
  }
}
	
export { Img };
export default injectStyles(Img, styles);
