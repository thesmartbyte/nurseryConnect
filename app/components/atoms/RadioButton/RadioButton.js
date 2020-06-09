

import React, { Component } from 'react';
import injectStyles from '../../../utils/injectStyles';
import styles from './RadioButton.style';

class RadioButton extends Component {
  state = {
    selected: this.props.selected || {},
    selectedValue: () => {},
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({ selected: nextProps.selected });
  }

  toggleRadioButton = (value) => {
    this.setState({ selected: value }, () => {
      this.props.selectedValue(this.state.selected);
    });
  }

  render() {
    const { className, item = {} } = this.props;
    return (
        <div className={className}>
          <label
            key={item.value}
            className={`${this.state.selected !== item.value ? 'non--slctd' : ''} container`}
            onClick={() => this.toggleRadioButton(item.value)}
            data-label={item.dataLabel}
          >
            <span>{item.label}</span>
            <input type="radio" readOnly={true} checked={this.state.selected === item.value ? 'checked' : ''} name={item.name} />
            <span className="checkmark" />
          </label>
        </div>
    );
  }
}

export { RadioButton };
export default injectStyles(RadioButton, styles);
