import React, { Component } from 'react';
import FaPlayCircle from 'react-icons/lib/fa/play-circle';
import FaAngleDown from 'react-icons/lib/fa/angle-down';
import FaAngleUp from 'react-icons/lib/fa/angle-up';
import FaCog from 'react-icons/lib/fa/cog';
import Moment from 'react-moment';
import MdLaunch from 'react-icons/lib/md/launch';
import { connect } from 'react-redux';
import { playEpisode } from '../../../actions/actions.js';

import '../../../styles/styles.css';

class PodcastEpisode extends Component {

  constructor(props) {
    super(props);

    this.state = {
      episode: this.props.episode,
      collapsed: true
    }

    this.sendEpisodeToPlayer = this.sendEpisodeToPlayer.bind(this);
    this.toggleDescription = this.toggleDescription.bind(this);
  }

  componentDidMount() {
    if (this.props.firstEpisode === true) {
      this.setState({ collapsed: false });
    }
  }

  toggleDescription() {
    this.setState({ collapsed: !this.state.collapsed });
  }

  sendEpisodeToPlayer() {
    this.props.playEpisode(this.state.episode);
  }

  render () {
    const episode = this.state.episode;

    return (
      <div className='podcast-episode'>
        <p className='podcast-episode-title'>{episode.title}</p>
        <p className='podcast-episode-duration'>{episode.audioDuration}</p>
        <p className='podcast-episode-date'>Aired: <Moment format="MM/DD/YYYY" date={episode.publishedDate}/></p>
        <div className='podcast-episode-play'>
          <FaPlayCircle  className='podcast-episode-play-button' onClick={this.sendEpisodeToPlayer} />
          <a className='podcast-go-button' href={episode.sourceUrl} target='_blank' rel='noreferrer no follow'><MdLaunch/></a>
          {/*
          <p>Or listen with: <span className='player-selection'>Spotify</span> <FaCog className='podcast-episode-settings-button'/></p> */}
        </div>
        { !this.state.collapsed && <p className='podcast-episode-description'>{episode.description}</p>}
        <p className='podcast-episode-toggle' onClick={this.toggleDescription}>{this.state.collapsed ? 'MORE' : 'HIDE'}</p>
      </div>
    )
  }
}




export default connect(null, { playEpisode })(PodcastEpisode);
