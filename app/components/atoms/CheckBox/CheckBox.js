

import React, { Component } from 'react';
import injectStyles from '../../../utils/injectStyles';
import styles from './Checkbox.style';

class CheckBox extends Component {
  state = {
    selected: this.props.selected || '',
    selectedValue: () => {},
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.selected !== this.props.selected) {
      this.setState({ selected: nextProps.selected });
    }
  }

  toggleCheckBox = () => {
    const { disabled } = this.props;
    if(disabled) return;
    const value = !this.state.selected;
    this.setState({ selected: value });
    this.props.selectedValue(value);
  }

  render() {
    const { className } = this.props;
    const { selected } = this.state;
    return (
        <div className={className}>
          <label className="cntnr">
            <input type="checkbox" checked={selected ? 'chckd' : ''} onChange={ this.toggleCheckBox}/>
            <span className="chckmrk" />
          </label>
        </div>
    );
  }
}

export { CheckBox };
export default injectStyles(CheckBox, styles);
