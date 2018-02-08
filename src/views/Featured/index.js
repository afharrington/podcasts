import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecentAllPodcasts } from '../../actions/actions.js';

import Carousel from './Carousel';
import EpisodeGrid from './EpisodeGrid';
import Player from '../../components/Player';

import '../../styles/styles.css';

class Featured extends Component {

  componentDidMount() {
    this.props.fetchRecentAllPodcasts();
  }

  render() {
    return (
      <div className='featured view'>
        <div className='featured-podcasts'>
          <div className='section-title'><h3>Featured Podcasts</h3></div>
          <Carousel/>
          <div className='section-title'><h3>Recent Episodes</h3></div>
          { this.props.recentEpisodes &&
          <EpisodeGrid recentEpisodes={this.props.recentEpisodes}/>
          }
        </div>
  
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    recentEpisodes: state.featured.recentEpisodes };
}

export default connect(mapStateToProps, { fetchRecentAllPodcasts })(Featured);
