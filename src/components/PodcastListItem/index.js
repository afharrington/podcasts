import React, { Component } from 'react';
import Moment from 'react-moment';

import '../../styles/styles.css';

class PodcastListItem extends Component {

  render () {
    const podcast = this.props.podcast;

    return (
      <div className='podcast-list-item'>
        <p className='podcast-list-item-title'>{podcast.title}</p>
      { /*
        <p className='podcast-list-item-episode'>{podcast.podcastEpisodeTitle}</p>
        <Moment className='podcast-list-item-date' fromNow date={podcast.podcastEpisodeDate}/>
      */ }
      </div>
    )
  }
}

export default PodcastListItem;
