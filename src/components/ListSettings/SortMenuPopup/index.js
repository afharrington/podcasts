import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside'

import '../../../styles/styles.css';

class SortMenuPopup extends Component {

  constructor(props) {
    super(props);

  this.handleSortZA = this.handleSortZA.bind(this);
  this.handleSortAZ = this.handleSortAZ.bind(this);
  }

  handleClickOutside = () => {
    this.props.onClickOutside();
  }

  handleSortAZ() {
    this.props.handleSortOrderChange('A-Z');
    this.props.closeSortMenu();
  }

  handleSortZA() {
    this.props.handleSortOrderChange('Z-A');
    this.props.closeSortMenu();
  }

  render() {

    return (
      <div className='sort-menu-popup'>
        <p className={ this.props.sortedBy == 'A-Z' ? 'sort-active' : ''} onClick={this.handleSortAZ}>A-Z</p>
        <p className={ this.props.sortedBy == 'Z-A' ? 'sort-active' : ''} onClick={this.handleSortZA}>Z-A</p>
      </div>
    )
  }
}

export default onClickOutside(SortMenuPopup);
