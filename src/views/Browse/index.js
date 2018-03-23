import React, { Component } from 'react';
import CategoryList from '../../components/CategoryList';
import PodcastsContainer from '../../components/PodcastsContainer';

import '../../styles/styles.css';

class Browse extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedCategory: '000'
    }

    this.handleSelectCategory = this.handleSelectCategory.bind(this);
  }

  handleSelectCategory(categoryId) {
    this.setState({ selectedCategory: categoryId });
  }

  // Passes ability to select a category down to category list
  render() {
    return (
      <div className='browse view'>
        <div className='section-title'><h3>Browse podcasts by topic</h3></div>
        <CategoryList handleSelectCategory={this.handleSelectCategory} selectedCategory={this.state.selectedCategory}/>
        <PodcastsContainer/>
      </div>
    )
  }
}

export default Browse;
