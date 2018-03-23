import React, { Component } from 'react';

import '../../../styles/styles.css';

class CategoryItem extends Component {

  // Sends value of selected category back up to Browse, to set the state in Browse value
  handleSelectCategoryWithValue = () => {
    this.props.handleSelectCategory(this.props.category.categoryId);
  }

  render() {
    const { category } = this.props;
    let categoryClassName = this.props.selectedCategory == category.categoryId ? 'category-item active' : 'category-item';

    return (
      <li className={categoryClassName} key={category.categoryId} onClick={this.handleSelectCategoryWithValue}>
        {category.categoryName} [{category.categoryCount}]
      </li>
    )
  }
}

export default CategoryItem;
