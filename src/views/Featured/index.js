import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchRecentAllPodcasts, fetchAllPodcasts } from '../../actions/actions.js';

import Carousel from './Carousel';
import EpisodeGrid from './EpisodeGrid';
import Player from '../../components/Player';

import '../../styles/styles.css';

class Featured extends Component {

  constructor(props) {
    super(props);

    this.state = {
      featuredPodcastIDs: [487, 493, 495, 507, 509, 510, 512]
    }
  }

  componentDidMount() {
    // this.props.fetchRecentPodcasts();
    this.props.fetchRecentAllPodcasts();
    this.props.fetchAllPodcasts();
  }

  render() {
    if (this.props.allPodcasts) {
        let allPodcastsById = _.mapKeys(this.props.allPodcasts, 'id');
        let allPodcastsByDate = _.orderBy(this.props.allPodcasts, ['latestReleaseDate'], ['desc']);
    }


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
    recentEpisodes: state.featured.recentEpisodes,
    allPodcasts: state.featured.allPodcasts
  };
}

export default connect(mapStateToProps, { fetchAllPodcasts, fetchRecentAllPodcasts })(Featured);
