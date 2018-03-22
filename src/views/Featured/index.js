import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchRecentPodcasts, fetchPodcast, fetchAllPodcasts } from '../../actions/actions.js';
import Carousel from './Carousel';
import EpisodeGrid from './EpisodeGrid';
import Player from '../../components/Player';

import '../../styles/styles.css';

class Featured extends Component {

  constructor(props) {
    super(props);

    this.state = {
      featuredPodcastIDs: [163, 166, 171, 173, 178, 185, 187, 189, 190, 192],
      numberEpisodes: 10
    }

    this.renderMoreEpisodes = this.renderMoreEpisodes.bind(this);
  }

  // Only fetch recentPodcasts is they are not already loaded to store
  componentDidMount() {
    if (this.props.recentPodcasts == null) {
      this.props.fetchRecentPodcasts();
    }

    this.props.fetchAllPodcasts();

    // Fetch featured podcasts
    this.state.featuredPodcastIDs.forEach((showId) => {
      this.props.fetchPodcast(showId);
    });
  }

  renderFeaturedPodcasts() {

    let featuredPodcasts = [];

    this.state.featuredPodcastIDs.forEach( id => {
      if (this.props.podcasts[id]) {
        featuredPodcasts.push(this.props.podcasts[id]);
      }
    });

    if (featuredPodcasts.length == this.state.featuredPodcastIDs.length) {
      return (
        <Carousel featuredPodcasts={featuredPodcasts}/>
      );
    } else {
      return (
      <div className="spinner">
        <div className="rect1"></div>
        <div className="rect2"></div>
        <div className="rect3"></div>
        <div className="rect4"></div>
        <div className="rect5"></div>
      </div>
      )
    }
  }

  renderRecentEpisodes() {
    if (this.props.recentPodcasts) {
      let { recentPodcasts } = this.props;

      let recentPodcastsSlice = recentPodcasts.slice(0, this.state.numberEpisodes);

      return (
        <div>
          <EpisodeGrid recentPodcasts={recentPodcastsSlice}/>

          { this.state.numberEpisodes < 30 &&
            <p className='more-episodes' onClick={this.renderMoreEpisodes}>More Episodes</p>
          }
        </div>
      )
    } else {
      return (
        <div className="spinner">
          <div className="rect1"></div>
          <div className="rect2"></div>
          <div className="rect3"></div>
          <div className="rect4"></div>
          <div className="rect5"></div>
        </div>
      )
    }
  }

  renderMoreEpisodes() {
    this.setState({ numberEpisodes: this.state.numberEpisodes += 10 });
  }

  // Loads featured podcasts immediately and featured episodes section when ready
  // TO DO: Send correct data to Carousel
  render() {
    return (
      <div className='featured view'>

        <div className='featured-podcasts'>
          <div className='section-title'><h3>Featured Podcasts</h3></div>
          { this.renderFeaturedPodcasts() }
        </div>

        <div className='featured-episodes'>
          <div className='section-title'><h3>Recently Aired</h3></div>
          { this.renderRecentEpisodes() }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    recentPodcasts: state.featured.recentPodcasts,
    podcasts: state.podcasts
  };
}

export default connect(mapStateToProps, { fetchRecentPodcasts, fetchPodcast, fetchAllPodcasts })(Featured);
