import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCategory, fetchCategory } from '../../../actions/actions.js';

import '../../../styles/styles.css';

class CategoryItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sortedBy: this.props.sortedBy
    }

  this.handleSelectCategory = this.handleSelectCategory.bind(this);
  }

  // Sends value of selected category back up to Browse, to set the state in Browse value
  // handleSelectCategoryWithValue = () => {
  //   this.props.handleSelectCategory(this.props.category.categoryId);
  // }


  handleSelectCategory() {
    // Sets the current category in state
    this.props.setCategory(this.props.category.categoryId);

    // Only fetch category results if not already in state and "All" is not selected
    if (!this.props.categories.hasOwnProperty(this.props.category.categoryId) && (this.props.category.categoryId !== 0)) {
      console.log('Fetching results for ID:', this.props.category.categoryId, this.props.category.categoryName);
      this.props.fetchCategory(this.props.category.categoryId);
    }
  }

  render() {
    const { category } = this.props;

    // If the categoryId matches the currently category in state, set to active
    let categoryClassName = this.props.currentCategory == category.categoryId ? 'category-item active' : 'category-item';

    return (
      <li className={categoryClassName} key={category.categoryId} onClick={this.handleSelectCategory}>
        {category.categoryName}
      </li>
    )
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories,
    currentCategory: state.currentCategory
  };
}

export default connect(mapStateToProps, { setCategory, fetchCategory })(CategoryItem);
