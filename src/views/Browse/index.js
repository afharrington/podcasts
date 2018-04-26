import React, { Component } from 'react';
import { connect } from 'react-redux';
import CategoryList from '../../components/CategoryList';
import PodcastsContainer from '../../components/PodcastsContainer';
import { fetchAllPodcasts, fetchCategory } from '../../actions/actions.js';

import '../../styles/styles.css';

class Browse extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedCategory: '2'
    }

    this.handleSelectCategory = this.handleSelectCategory.bind(this);
  }

  // Fetch all podcasts (since default category view is "All")
  componentDidMount() {
    // this.props.fetchAllPodcasts();
    this.props.fetchCategory(this.state.selectedCategory);
  }

  handleSelectCategory(categoryId) {
    this.setState({ selectedCategory: categoryId });
    this.props.fetchCategory(categoryId);
    console.log(categoryId);
  }

  // Passes ability to select a category down to category list
  render() {
    return (
      <div className='browse view'>
        <div className='section-title'><h3>Browse podcasts by topic</h3></div>
        <CategoryList handleSelectCategory={this.handleSelectCategory} selectedCategory={this.state.selectedCategory}/>

        <PodcastsContainer selectedCategory={this.state.selectedCategory} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    podcasts: state.podcasts,
    categories: state.categories
  };
}

export default connect(mapStateToProps, { fetchAllPodcasts, fetchCategory })(Browse);
