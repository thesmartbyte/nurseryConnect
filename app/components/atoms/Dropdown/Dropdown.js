import React, { Component } from 'react';
import get from 'lodash/get';
import injectStyles from '../../../utils/injectStyles';
import styles, { icnCstms } from './Dropdown.style';
import clickOutside from '../../../utils/clickOutside';
import IconImage from '../IconImage';

class Dropdown extends Component {
  state = {
    listOpen: false,
  }

  myRef = React.createRef();

  handleClickOutside = () => {
    if (this.state.listOpen) { this.setState({ listOpen: false }); }
  };

  toggleList = () => {
    this.setState({ listOpen: true });
  }

  clickHandle = (val) => {
    this.setState({ listOpen: false });
    this.props.clickHandle(val);
  }


  render() {
    const {
      className, list, customStyle, title,
    } = this.props;
    const { listOpen } = this.state;
    const arrowTypeIcon = 'down_arrow_filled.svg';
    const style = listOpen && get(this.myRef.current, 'offsetParent') && ((get(this.myRef.current, 'offsetTop') + 50) > get(this.myRef.current, 'offsetParent.scrollHeight')) ? { bottom: `${(get(this.myRef.current, 'offsetParent.scrollHeight') - get(this.myRef.current, 'offsetTop') - 20)}px`, position: 'absolute' } : {};
    return (<div className={className} ref={this.myRef} style={style}>
    {!listOpen && <div className="itm-dsc__actn__sz__dd-ttl" onClick={this.toggleList}>{title} <IconImage imageUrl={arrowTypeIcon} inheritedStyles={icnCstms}/></div>}
      {listOpen && (<div className="dd-wrpr"><ul className= {customStyle}>
      {list.map(data => (<li className={data.className} key={data.key} value={data.value}
          selected={data.selected}
          onClick={() => { data && data.value && this.clickHandle(data.value); }}>
          {data.text}</li>))
        }
    </ul></div>)}
      </div>);
  }
}

export { Dropdown };
export default injectStyles(clickOutside(Dropdown), styles);
