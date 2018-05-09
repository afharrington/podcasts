import React, { Component } from 'react';
import Moment from 'react-moment';
import { NavLink } from 'react-router-dom';

import '../../styles/styles.css';

class PodcastGridItem extends Component {

  render () {
    const podcast = this.props.podcast;

    return (
        <div className='podcast-grid-item' key={podcast.id}>

          <NavLink to={`/podcast/${podcast.id}`}>
            <img src={podcast.imageUrl} alt='' />
          </NavLink>

          <p className='podcast-grid-item-title'>{podcast.title}</p>
          {/*
          <p className='podcast-grid-item-episode'>{podcast.podcastEpisodeTitle}</p>
          <p className='podcast-grid-item-date'>
            <Moment fromNow date={podcast.podcastEpisodeDate}/>
          </p> */}
        </div>

    )
  }
}

export default PodcastGridItem;
