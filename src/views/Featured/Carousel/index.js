import React, { Component } from 'react';
import Slider from 'react-slick';
import CarouselItem from '../CarouselItem';

import '../../../styles/styles.css';

class Carousel extends Component {

  constructor(props) {
    super(props);

    this.renderCarouselItems = this.renderCarouselItems.bind(this);
  }


  renderCarouselItems() {
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
      <Slider {...settings}>
        <div><CarouselItem podcast={this.props.featuredPodcasts[0]}/></div>
        <div><CarouselItem podcast={this.props.featuredPodcasts[1]}/></div>
        <div><CarouselItem podcast={this.props.featuredPodcasts[2]}/></div>
        <div><CarouselItem podcast={this.props.featuredPodcasts[3]}/></div>
        <div><CarouselItem podcast={this.props.featuredPodcasts[4]}/></div>
        <div><CarouselItem podcast={this.props.featuredPodcasts[5]}/></div>
        <div><CarouselItem podcast={this.props.featuredPodcasts[6]}/></div>
        <div><CarouselItem podcast={this.props.featuredPodcasts[7]}/></div>
        <div><CarouselItem podcast={this.props.featuredPodcasts[8]}/></div>
        <div><CarouselItem podcast={this.props.featuredPodcasts[9]}/></div>
      </Slider>
    )
  }

  render() {


    return (
      <div className='carousel'>
        { this.renderCarouselItems() }
      </div>
    )
  }
}

export default Carousel;
