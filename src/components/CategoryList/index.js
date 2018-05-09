import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { setCategory } from '../../actions/actions.js';
import { categories } from '../../data/categories.js';
import FaCaretDown from 'react-icons/lib/fa/caret-down';
import CategoryItem from './CategoryItem';
import CategoryMenu from './CategoryMenu';

import '../../styles/styles.css';

class CategoryList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: categories,
      selectedCategory: this.props.selectedCategory,
      menuOpen: false,
      sortedBy: 'Popularity'
    }

    this.showCategorySortMenu = this.showCategorySortMenu.bind(this);
    this.handleSortOrderChange = this.handleSortOrderChange.bind(this);
    this.handleSelectAll = this.handleSelectAll.bind(this);
  }

  // Toggles the sort menu pop-up
  showCategorySortMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  handleSortOrderChange(sortOption) {
    this.setState({ sortedBy: sortOption });
  }

  handleSelectAll() {
    this.props.setCategory(0);
  }

  // Passes ability to select a category down to individual category items
  renderCategories() {
    let categories;
    if (this.state.sortedBy === 'A-Z') {
      categories = _.orderBy(this.state.categories, 'categoryName', 'asc');
    } else if (this.state.sortedBy === 'Z-A') {
      categories = _.orderBy(this.state.categories, 'categoryName', 'desc');
    } else {
      categories = this.state.categories;
    }

    return categories.map(category => {
      return (
        <CategoryItem key={category.categoryId} category={category} handleSelectCategory={this.props.handleSelectCategory} selectedCategory={this.props.selectedCategory} />
      )
    })
  }

  render() {
    let categoryClassName = this.props.currentCategory === 0 ? 'category-item active' : 'category-item';

    return (
      <div className='category-list'>
        <p className='list-sort'><span className='label'>Sort by:</span> {this.state.sortedBy} <span className='icon'><FaCaretDown onClick={this.showCategorySortMenu}/></span></p>

        { this.state.menuOpen && <CategoryMenu handleSortOrderChange={this.handleSortOrderChange} sortedBy={this.state.sortedBy} onClickOutside={this.showCategorySortMenu} /> }

        <ul>
          <li className={categoryClassName} onClick={this.handleSelectAll}>
            All
          </li>
          {this.renderCategories()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.currentCategory
  };
}

export default connect(mapStateToProps, { setCategory })(CategoryList);
