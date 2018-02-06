import React, { Component } from 'react';

import '../../../styles/styles.css';

class CarouselItem extends Component {

  render() {
    const thumbnailUrl = 'http://is2.mzstatic.com/image/thumb/Music122/v4/8f/2a/e6/8f2ae649-7ff1-c8ef-5d57-62800ef9b006/source/600x600bb.jpg';

    return (
      <div className='carousel-item'>
        <img className='carousel-item-thumbnail' src={thumbnailUrl} alt=''/>

        <div className='carousel-item-title'>
          <p>Front End Happy Hour</p>
          <p>Front End Happy Hour</p>
        </div>

        <p className='carousel-item-description'>"A podcast featuring panelists of engineers from Netflix, Evernote & LinkedIn talking over drinks about all things Front End development."</p>
      </div>
    )
  }
}

export default CarouselItem;
