import React, { Component } from 'react';

import '../../../styles/styles.css';

class CarouselItem extends Component {

  render() {
    const { podcast } = this.props;
    if (podcast) {

      return (
        <div className='carousel-item'>
          <img className='carousel-item-thumbnail' src={podcast.imageUrl} alt=''/>

          <div className='carousel-item-title'>
            <p>{podcast.title}</p>
            <p>{podcast.artists}</p>
          </div>

          <p className='carousel-item-description'>"{podcast.description}"</p>
        </div>
      )
    } else {
      return <div></div>
    }
  }
}

export default CarouselItem;
