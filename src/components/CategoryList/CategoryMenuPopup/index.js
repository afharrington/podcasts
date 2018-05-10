import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside'

import '../../../styles/styles.css';

class CategoryMenuPopup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sortedBy: this.props.sortedBy
    }

  this.handleSortZA = this.handleSortZA.bind(this);
  this.handleSortAZ = this.handleSortAZ.bind(this);
  this.handleSortPopularity = this.handleSortPopularity.bind(this);
  }

  handleClickOutside = () => {
    this.props.onClickOutside();
  }

  handleSortPopularity() {
    this.props.handleSortOrderChange('Popularity');
  }

  handleSortAZ() {
    this.props.handleSortOrderChange('A-Z');
  }

  handleSortZA() {
    this.props.handleSortOrderChange('Z-A');
  }

  render() {

    return (
      <div className='category-menu'>
        <p className={ this.state.sortedBy == 'Popularity' ? 'sort-active' : ''} onClick={this.handleSortPopularity}>Popularity</p>
        <p className={ this.state.sortedBy == 'A-Z' ? 'sort-active' : ''} onClick={this.handleSortAZ}>A-Z</p>
        <p className={ this.state.sortedBy == 'Z-A' ? 'sort-active' : ''} onClick={this.handleSortZA}>Z-A</p>
      </div>
    )
  }
}

export default onClickOutside(CategoryMenuPopup);
