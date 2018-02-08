import React, { Component } from 'react';
import FaPlayCircle from 'react-icons/lib/fa/play-circle';
import FaCog from 'react-icons/lib/fa/cog';
import Moment from 'react-moment';

import '../../../styles/styles.css';

class PodcastEpisode extends Component {

  render () {
    const episode = this.props.episode;

    return (
      <div className='podcast-episode'>
        <p className='podcast-episode-title'>{episode.episodeTitle}</p>
        <p className='podcast-episode-duration'>{episode.episodeDuration}</p>
        <p className='podcast-episode-date'>Aired: <Moment format="MM/DD/YYYY" date={episode.episodeDate}/></p>
        <div className='podcast-episode-play'>
          <FaPlayCircle className='podcast-episode-play-button'/>
          <p>Or listen with: <span class='player-selection'>Spotify</span> <FaCog className='podcast-episode-settings-button'/></p>
        </div>
        <p className='podcast-episode-description'>{episode.episodeDescription}</p>
        <p className='podcast-episode-toggle'>LESS</p>
      </div>
    )
  }
}

export default PodcastEpisode;
