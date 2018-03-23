import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside'

import '../../../styles/styles.css';

class CategoryMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sortedBy: this.props.sortedBy
    }

  }

  handleClickOutside = () => {
    this.props.onClickOutside();
  }

  render() {

    return (
      <div className='category-menu'>
        <p className={ this.state.sortedBy == 'Popularity' ? 'sort-active' : ''}>Popularity</p>
        <p className={ this.state.sortedBy == 'A-Z' ? 'sort-active' : ''}>A-Z</p>
        <p className={ this.state.sortedBy == 'Z-A' ? 'sort-active' : ''}>Z-A</p>
      </div>
    )
  }
}

export default onClickOutside(CategoryMenu);
