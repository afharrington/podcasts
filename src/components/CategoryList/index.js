import React, { Component } from 'react';
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

    this.showCategoryMenu = this.showCategoryMenu.bind(this);
    this.selectAll = this.selectAll.bind(this);
  }

  showCategoryMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  // Passes ability to select a category down to individual category items
  renderCategories() {

    return this.state.categories.map(category => {

      return (
        <CategoryItem key={category.categoryId} category={category} handleSelectCategory={this.props.handleSelectCategory} selectedCategory={this.props.selectedCategory} />
      )
    })
  }

  selectAll() {
    this.props.handleSelectCategory('000');
  }

  render() {
    let categoryClassName = this.props.selectedCategory == '000' ? 'category-item active' : 'category-item';

    return (
      <div className='category-list'>
        <p className='list-sort'><span className='label'>Sort by:</span> {this.state.sortedBy} <span className='icon'><FaCaretDown onClick={this.showCategoryMenu}/></span></p>
        { this.state.menuOpen && <CategoryMenu sortedBy={this.state.sortedBy} onClickOutside={this.showCategoryMenu} /> }
        <ul>
          <li className={categoryClassName} onClick={this.selectAll}>
            All
          </li>
          {this.renderCategories()}
        </ul>
      </div>
    )
  }
}

export default CategoryList;
