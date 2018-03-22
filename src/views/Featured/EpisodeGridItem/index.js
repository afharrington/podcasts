import React, { Component } from 'react';
import Moment from 'react-moment';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { playEpisode } from '../../../actions/actions.js';
import FaPlayCircle from 'react-icons/lib/fa/play-circle';
import FaCog from 'react-icons/lib/fa/cog';
import FaAngleDoubleRight from 'react-icons/lib/fa/angle-double-right';
import MdLaunch from 'react-icons/lib/md/launch';

import '../../../styles/styles.css';

// Episodes shown on the Featured page
class EpisodeGridItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      episode: this.props.episode
    }

    this.playEpisode = this.playEpisode.bind(this);
  }

  renderTitle() {
    let episodeTitle = this.state.episode.title;
    if (episodeTitle.length > 55) {
      episodeTitle = episodeTitle.substring(0, 55) + '...';
    }

    return (
      <h6 className='episode-title'>{episodeTitle}</h6>
    )
  }

  playEpisode() {
    this.props.playEpisode(this.state.episode);
  }

  render() {

    return (
      <div className='episode-grid-item'>
        <NavLink to={`/podcast/${this.state.episode.podcastId}`}><img src={this.props.imageUrl} alt=''/></NavLink>
        {this.renderTitle()}
        <p className='episode-date'>Aired: <Moment format="MM/DD/YYYY" date={this.state.episode.publishedDate}/></p>
        <NavLink className='podcast-title' to={`/podcast/${this.state.episode.podcastId}`}><p >{this.props.podcastTitle}</p></NavLink>
        <div className='episode-play'>
          <FaPlayCircle className='play-button' onClick={this.playEpisode}/>
          <a className='go-button' href={this.state.episode.sourceUrl} target='_blank' rel='noreferrer no follow'><MdLaunch/></a>
          {
            /*
            <p>Or listen with: <span className='player-selection'>Spotify</span> <FaCog className='settings-button'/></p>
          */
          }
        </div>
      </div>
    )
  }
}

export default connect(null, { playEpisode })(EpisodeGridItem);
