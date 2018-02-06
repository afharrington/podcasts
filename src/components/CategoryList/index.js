import React, { Component } from 'react';
import FaCaretDown from 'react-icons/lib/fa/caret-down';

import '../../styles/styles.css';

class CategoryList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { categoryName: 'General Interest', categoryCode: 1, categoryCount: 23},
        { categoryName: 'Career & Education', categoryCode: 2, categoryCount: 12},
        { categoryName: 'Freelancing', categoryCode: 3, categoryCount: 8},
        { categoryName: 'Python', categoryCode: 4, categoryCount: 4}
      ]
    }
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
