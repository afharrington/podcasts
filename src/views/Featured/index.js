import React, { Component } from 'react';
import Carousel from '../../components/Carousel';
import EpisodeGrid from '../../components/EpisodeGrid';

import '../../styles/styles.css';

class Featured extends Component {

  render() {
    return (
      <div className='featured view'>
        <div className='featured-podcasts'>
          <div className='section-title'><h3>Featured Podcasts</h3></div>
          <Carousel/>
          <div className='section-title'><h3>Recent Episodes</h3></div>
          <EpisodeGrid/>
        </div>
      </div>
    )
  }
}

export default Featured;
