import React, { Component } from 'react';
import FaPlayCircle from 'react-icons/lib/fa/play-circle';
import FaCog from 'react-icons/lib/fa/cog';
import FaAngleDoubleRight from 'react-icons/lib/fa/angle-double-right';

import '../../../styles/styles.css';

class EpisodeGridItem extends Component {

  render() {

    const episode = this.props.episode;

    return (
      <div className='episode-grid-item'>
        <img src={episode.imageUrl} alt=''/>
        <h5 className='episode-title'>#1550 How to do your own PR right</h5>
        <p className='episode-date'>Aired: 02/03/2018</p>
        <div className='episode-play'>
          <FaPlayCircle className='play-button'/>
          <p>Or listen with: <span className='player-selection'>Spotify</span> <FaCog className='settings-button'/></p>
        </div>
        <div className='episode-link'><FaAngleDoubleRight className='go-button'/></div>
      </div>
    )
  }
}

export default EpisodeGridItem;
