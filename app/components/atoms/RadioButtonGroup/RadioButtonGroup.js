

import React, { Component } from 'react';
import get from 'lodash/get';
import injectStyles from '../../../utils/injectStyles';
import styles from './RadioButtonGroup.style';
import RadioButton from '../RadioButton';
import GTMTracker from '../../../utils/GTMTracker';
import { ErrorEvents } from '../../../utils/GTMEvents';
import { logError } from '../../../utils/util';

class RadioButtonGroup extends Component {
  setSelected = () => {
    const { items = [], selected } = this.props;

    if (!Array.isArray(items)) {
      logError(`RadioButtonGroup: items is not array selected: ${selected}`, 'RadioButtonGroup.js', items);
      return '';
    }

    return get(items.find(item => item.value === selected), 'value', '');
  }

  state = {
    selected: this.setSelected(),
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
    try {
      const { className, items = [] } = this.props;
      const { selected } = this.state;
      return (
        <div className={className}>
          {items.map((item, index) => (
              <RadioButton key={index} item={item} selectedValue={this.toggleRadioButton} selected={selected}/>
          ))}
        </div>
      );
    } catch (err) {
      GTMTracker(ErrorEvents.errorFrontEnd.type, { ...ErrorEvents.errorFrontEnd.payload, eventLabel: err, eventAction: 'RadioButton Group atom' });
      return null;
    }
  }
}

export { RadioButtonGroup };
export default injectStyles(RadioButtonGroup, styles);
