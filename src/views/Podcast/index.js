import React, { Component } from 'react';
import PodcastEpisode from './PodcastEpisode';
import { connect } from 'react-redux';
import { fetchPodcastEpisodes, fetchPodcast } from '../../actions/actions.js';

import '../../styles/styles.css';

// Podcast View: includes podcast image, description, and 15 recent episodes
// Styles: views/podcast.scss

class Podcast extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showId: this.props.match.params.showId,
      numberEpisodes: 15
    }

    this.renderPodcastInfo = this.renderPodcastInfo.bind(this);
    this.renderEpisodes = this.renderEpisodes.bind(this);
    this.renderMoreEpisodes = this.renderMoreEpisodes.bind(this);
  }

  componentDidMount() {
    this.props.fetchPodcast(this.state.showId);
    this.props.fetchPodcastEpisodes(this.state.showId);
  }

  renderPodcastInfo() {
    if (this.props.podcasts[this.state.showId]) {
      const podcast = this.props.podcasts[this.state.showId];

      return (
        <div className='podcast-show-info'>
          <img src={podcast.imageUrl} alt='' />
          <h3 className='podcast-title'>{podcast.title}</h3>
          <h5 className='podcast-authors'>{podcast.artists}</h5>
          <div className='podcast-tags'>
            <p>Python</p>
            <p>Data Science</p>
            <p>Web Development</p>
          </div>
          <p className='podcast-description'>"{podcast.description}"</p>
        </div>
      )
    } else {
      return (
        <div>
        </div>
      )
    }

  }

  renderEpisodes() {
    const episodes = this.props.episodes[this.state.showId];

    if (episodes) {
      const episodes = this.props.episodes[this.state.showId];

      // Initially renders the first 15 episodes only
      let episodesSlice = episodes.slice(0, this.state.numberEpisodes);

      return  (
        <div className='podcast-episodes'>
          <div className='section-title'><h3>Episodes</h3></div>
           <PodcastEpisode firstEpisode={true} episode={episodes[0]} />
          { episodesSlice.map(episode => {
            return <PodcastEpisode firstEpisode={false} key={episode.id} episode={episode}/>
          })}
          <p className='more-episodes' onClick={this.renderMoreEpisodes}>More Episodes</p>
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
    this.setState({ numberEpisodes: this.state.numberEpisodes += 15 });
  }

  render() {

      return (
        <div className='podcast view'>
          { this.renderPodcastInfo()}
          { this.renderEpisodes() }
        </div>
      )
    }

}

function mapStateToProps(state) {
  return {
    episodes: state.episodes,
    podcasts: state.podcasts
  };
}

export default connect(mapStateToProps, { fetchPodcastEpisodes, fetchPodcast })(Podcast);
