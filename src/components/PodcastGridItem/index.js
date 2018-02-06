import React, { Component } from 'react';
import Moment from 'react-moment';

import '../../styles/styles.css';

class PodcastGridItem extends Component {

  render () {
    const podcast = this.props.podcast;

    return (
      <div className='podcast-grid-item'>
        <img src={podcast.podcastImageUrl} alt='' />
        <p className='podcast-grid-item-title'>{podcast.podcastTitle}</p>
        <p className='podcast-grid-item-episode'>{podcast.podcastEpisodeTitle}</p>
        <p className='podcast-grid-item-date'>
          <Moment fromNow date={podcast.podcastEpisodeDate}/>
        </p>
      </div>
    )
  }
}

export default PodcastGridItem;
