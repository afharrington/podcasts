import React, { Component } from 'react';
import CategoryList from '../../components/CategoryList';
import PodcastsContainer from '../../components/PodcastsContainer';

import '../../styles/styles.css';

class Browse extends Component {

  render() {
    return (
      <div className='browse view'>
        <div className='section-title'><h3>Browse podcasts by topic</h3></div>
        <CategoryList/>
        <PodcastsContainer/>
      </div>
    )
  }
}

export default Browse;
