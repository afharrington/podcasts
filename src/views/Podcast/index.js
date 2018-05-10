import React, { Component } from 'react';
import _ from 'lodash';
import PodcastEpisode from './PodcastEpisode';
import { categories } from '../../data/categories.js';
import { connect } from 'react-redux';
import { fetchPodcastEpisodes, fetchPodcast, setCategory } from '../../actions/actions.js';

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

  handleSetCategory() {

  }

  renderPodcastTags() {
    // Match categoryIds from data file with podcast categories
    let categoriesById =  _.mapKeys(categories, 'categoryId');
    let podcastCategoriesById = [];

    // If the podcast info is in state, use the tags belonging to it - else
    // set categories to an empty string
    let podcastCategories = this.props.podcasts[this.state.showId] ? this.props.podcasts[this.state.showId].podcastCategories : '';


    podcastCategories.forEach(category => {
      podcastCategoriesById.push(categoriesById[category.categoryId].categoryName);
    });


    return (
      <div className='podcast-tags'>
        {
          podcastCategories.map(category => {
            return <a href="/browse" category={category} onClick={this.props.handleSetCategory}><p key={category.categoryId}>{category.categoryName}</p></a>
          })
        }
      </div>
    );
  }

  renderPodcastInfo() {
    if (this.props.podcasts[this.state.showId]) {
      const podcast = this.props.podcasts[this.state.showId];

      return (
        <div className='podcast-show-info'>
          <img src={podcast.imageUrl} alt='' />
          <h3 className='podcast-title'>{podcast.title}</h3>
          <h5 className='podcast-authors'>{podcast.artists}</h5>
          { this.renderPodcastTags() }
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
    // const episodes = this.props.episodes[this.state.showId];
    // const episodes = this.props.podcasts[this.state.showId].episodes;
    let episodes;
    if (this.props.podcasts[this.state.showId]) {
      episodes = this.props.podcasts[this.state.showId].episodes;
    }

    if (episodes) {

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
    // episodes: state.episodes,
    currentCategory: state.currentCategory,
    podcasts: state.podcasts
  };
}

export default connect(mapStateToProps, { fetchPodcastEpisodes, fetchPodcast, setCategory })(Podcast);
