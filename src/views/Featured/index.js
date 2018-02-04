import React, { Component } from 'react';

import Carousel from '../../components/Carousel';

import '../../styles/styles.css';

class Featured extends Component {

  render() {
    return (
      <div className='featured view'>
        <div className='featured-podcasts'>
          <div className='section-title'>
            <h3>Featured podcasts</h3>
          </div>
          <Carousel/>
        </div>
      </div>
    )
  }
}

export default Featured;
