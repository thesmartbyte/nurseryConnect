

import React, { Component } from 'react';
import injectStyles from '../../../utils/injectStyles';
import styles from './Input.style';


class Input extends Component {
  static defaultProps = {
    type: 'text',
    value: '',
    onChange: () => {},
    onKeyUp: () => {},
    iconSrc2: false,
    iconClick2: () => {},
    iconClick: () => {},
    reset: false,
  }

  inputSelfRef = React.createRef();

  state = {
    inputVal: this.props.value,
  }

  UNSAFE_componentWillReceiveProps({ value, isDropDown, reset, hasPrefilled }) {
    if (isDropDown) this.setState({ inputVal: value });
    if (reset) this.setState({ inputVal: '' });
    if(hasPrefilled) { this.setState({ inputVal: value })};
  }

  // componentDidMount() {
  //   this.inputSelfRef.current.focus();
  // }

  onChangeHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.persist && e.persist();
    const { onChange, index, maxLength } = this.props;
    if (e.target.value.length > maxLength) {
      this.setState({
        inputVal: this.state.inputVal,
      }, () => {
        onChange(this.state.inputVal, index);
      });
    } else {
      this.setState({
        inputVal: e.target.value,
      }, () => {
        onChange(this.state.inputVal, index);
      });
    }
  }

  onKeyUpHandler = (e) => {
    e.stopPropagation();
    const { onKeyUp, index } = this.props;
    this.setState({
      inputVal: e.target.value,
    });
    onKeyUp(e, index);
  }

  floatingClick = () => {
    this.inputSelfRef.current.focus();
  }

  render() {
    const {
      type, inputRef, readOnly, value, floatingLabel, className, iconSrc, iconClick, iconSrc2, iconClick2, iconSrcClass, iconSrcClass2, maxLength, placeholder, inheritedStyles, pattern, dataLabelIcon, reset, isDropDown, autofocus, children, name, ...otherProps
    } = this.props;
    const { inputVal } = this.state;
    this.inputSelfRef = inputRef || this.inputSelfRef;
    return (
        <div className={className} {...otherProps}>
          <input name={name} autoFocus={autofocus} type={type} value={ inputVal || value } placeholder={placeholder} readOnly={readOnly} ref={ this.inputSelfRef } className={ inputVal || value ? 'non-empty' : ''} maxLength={ maxLength } onKeyUp={ this.onKeyUpHandler }
          onChange={ this.onChangeHandler }
          pattern={pattern}
          />
          { floatingLabel && <span onClick={ this.floatingClick }>{ floatingLabel }</span> }
          {children || null}
          {iconSrc && <img data-label={dataLabelIcon} src={iconSrc} onClick={ iconClick } className={ iconSrcClass } /> }
          {iconSrc2 && <img src={iconSrc2} onClick={ iconClick2 } className={ iconSrcClass2 }/> }
        </div>
    );
  }
}

export { Input };
export default injectStyles(Input, styles);
