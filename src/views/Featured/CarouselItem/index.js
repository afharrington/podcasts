import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../../../styles/styles.css';

class CarouselItem extends Component {

  render() {
    const { podcast } = this.props;
    if (podcast) {

      return (
        <div className='carousel-item'>

          <NavLink to={`/podcast/${podcast.id}`}>
            <img className='carousel-item-thumbnail' src={podcast.imageUrl} alt=''/>
          </NavLink>

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
