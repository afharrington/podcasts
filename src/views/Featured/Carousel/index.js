import React, { Component } from 'react';
import Slider from 'react-slick';
import CarouselItem from '../CarouselItem';

import '../../../styles/styles.css';

class Carousel extends Component {

  render() {
    let settings = {
      dots: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      speed: 600,
      autoplaySpeed: 3500,
      pauseOnHover: true,
      responsive: [{ breakpoint: 600, settings: { slidesToShow: 1 }}]
    }

    return (
      <div className='carousel'>
        <Slider {...settings}>
          <div><CarouselItem/></div>
          <div><CarouselItem/></div>
          <div><CarouselItem/></div>
          <div><CarouselItem/></div>
          <div><CarouselItem/></div>
          <div><CarouselItem/></div>
        </Slider>
      </div>
    )
  }
}

export default Carousel;
