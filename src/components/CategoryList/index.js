import React, { Component } from 'react';
import { categories } from '../../data/categories.js';
import FaCaretDown from 'react-icons/lib/fa/caret-down';

import '../../styles/styles.css';

class CategoryList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: categories
    }
  }

  componentDidMount() {
    console.log(this.state.categories);
  }

  renderCategories() {
    return this.state.categories.map(category => {
      return <li>{category.categoryName} [{category.categoryCount}]</li>
    })
  }

  render() {
    return (
      <div className='category-list'>
        <p className='list-sort'><span className='label'>Sort by:</span> Popularity <span className='icon'><FaCaretDown/></span></p>
        <ul>
          <li>All</li>
          {this.renderCategories()}
        </ul>
      </div>
    )
  }
}

export default CategoryList;
