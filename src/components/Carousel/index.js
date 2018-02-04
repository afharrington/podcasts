import React, { Component } from 'react';
import Slider from 'react-slick';

import '../../styles/styles.css';

class Carousel extends Component {

  render() {
    let settings = {
      dots: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1
    }

    return (
      <div className='carousel'>
        <Slider {...settings}>
          <div className='carousel-item'><h3>1</h3></div>
          <div className='carousel-item'><h3>2</h3></div>
          <div className='carousel-item'><h3>3</h3></div>
          <div className='carousel-item'><h3>4</h3></div>
          <div className='carousel-item'><h3>5</h3></div>
          <div className='carousel-item'><h3>6</h3></div>
        </Slider>
      </div>
    )
  }
}

export default Carousel;
