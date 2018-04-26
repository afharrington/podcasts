import React, { Component } from 'react';
import Moment from 'react-moment';

import '../../styles/styles.css';

class PodcastGridItem extends Component {

  render () {
    const podcast = this.props.podcast;
    console.log(podcast);

    return (
        <div className='podcast-grid-item'>
          <a href={`/podcast/${podcast.id}`}>
            <img src={podcast.imageUrl} alt='' />
          </a>
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
