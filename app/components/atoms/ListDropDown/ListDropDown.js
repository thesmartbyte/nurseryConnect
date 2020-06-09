
import React, { Component } from 'react';
import get from 'lodash/get';
import injectStyles from '../../../utils/injectStyles';
import styles, { iconStyles, inputStyles } from './ListDropDown.style';
import IconImage from '../IconImage';
import clickOutside from '../../../utils/clickOutside';
import Input from '../Input';
import endPoints from '../../../../api/endPoints';
import GTMTracker from '../../../utils/GTMTracker';
import { ErrorEvents } from '../../../utils/GTMEvents';

class ListDropDown extends Component {
  static defaultProps = {
    items: [],
    isIcon: false,
    outsideClick: () => {},
    onClick: () => {},
    onInputChange: () => {},
    getDropDownData: () => {},
  }

  state = {
    isOpen: this.props.isOpen,
    label: this.props.label || '',
    allItems: false,
  }

  onClick(item) {
    this.setState({ isOpen: false, label: get(item, this.props.mainTextKey, item) }, () => {
      this.props.onClick(item);
    });
  }

  UNSAFE_componentWillReceiveProps({ reset }) {
    if (reset) {
      this.setState({ label: '' });
    }
  }

  handleClickOutside() {
    this.setState({ isOpen: false });
    this.props.outsideClick(false);
  }

  setValue = (value) => {
    this.setState({ label: value, allItems: false });
    this.props.onInputChange(value);
  }

  toggleList = (event) => {
    if (event) {
      event.stopPropagation();
    }
    this.setState({ isOpen: !this.state.isOpen });
  }

  getAllDropDownData = () => {
    this.setState({ allItems: true }, () => {
      this.props.getDropDownData();
    });
  }

  render() {
    try {
      const {
        items, className, isIcon, title, mainTextKey, subTextKey, arrow, getDropDownData, isDisabled,
      } = this.props;
      const { isOpen, label, allItems } = this.state;
      return (
        <div className={className}>
          {title
            ? <div onClick={this.toggleList} className='lbl--wrpr'>
              <Input
                placeholder={title}
                iconSrc={`/static/icons/down_arrow_filled.svg`}
                inheritedStyles={inputStyles}
                onChange={this.setValue}
                value={label || this.props.label}
                onClick={getDropDownData}
                iconClick={this.getAllDropDownData}
                isDropDown
                readOnly={isDisabled}
              />
            </div>
            : null
          }
          {isOpen
            ? <ul>
              {(allItems
                ? items
                : items.filter(item => (get(item, mainTextKey, item) || '').toLowerCase().indexOf((label || '').toLowerCase()) !== -1)
              ).map((item, index) => (
                <li key={index} onClick={() => this.onClick(item)} data-label={`location_${get(item, mainTextKey, item)}`}>
                  {isIcon ? <IconImage imageUrl={isIcon} inheritedStyles={iconStyles} /> : null }
                  <div className='lst-wrpr'>
                    <span className='lst-desc-main'>{get(item, mainTextKey, item)}</span>
                    {subTextKey
                      ? <span className='lst-desc-sec'>{get(item, subTextKey, '')}</span>
                      : null
                    }
                  </div>
                </li>
              ))}
            </ul>
            : null
          }
        </div>
      );
    } catch (err) {
      GTMTracker(ErrorEvents.errorFrontEnd.type, { ...ErrorEvents.errorFrontEnd.payload, eventLabel: err, eventAction: 'ListDrop Down Catch' });
      return null;
    }
  }
}

export { ListDropDown };
export default injectStyles(clickOutside(ListDropDown), styles);
