import React, { Component } from 'react';
import PodcastEpisode from './PodcastEpisode';
import { connect } from 'react-redux';
import { fetchEpisodes, fetchPodcast } from '../../actions/actions.js';

import '../../styles/styles.css';

class Podcast extends Component {

  constructor(props) {
    super(props);
    this.state = {
      podcastId: 487,
      podcastTitle: 'Front End Happy Hour',
      podcastDescription: 'Chris Coyier, Alex Vazquez, and Tim Sabat, the co-founders of CodePen talk about the ins and outs of running a web software business.',
      podcastImageUrl: 'http://is5.mzstatic.com/image/thumb/Music118/v4/1b/93/01/1b9301c5-e128-d3fd-9e37-d2dff166b831/source/600x600bb.jpg',
      podcastAuthors: 'Front End Happy Hour',
      episodes: [
        {
          title: 'Episode 049 - Independent taste testing',
          duration: '32:05',
          publishedDate: '2018-01-22T04:05:07',
          description: 'We are back in 2018, for the first episode of the New Year we have two special guests, Shirley Wu and Amy Wibowo to talk with us about freelancing and running your own business. We discuss how to start freelance work, how to manage clients and how to handle difficult clients.',
          audioUrl: 'http://feeds.soundcloud.com/stream/387211061-front-end-happy-hour-episode-049-independent-taste-testing.mp3'
        }
      ]
    }

    this.renderEpisodes = this.renderEpisodes.bind(this);
  }

  componentDidMount() {
    this.props.fetchPodcast(491);
    this.props.fetchEpisodes(491);
  }

  renderEpisodes() {
    const episodes = this.props.episodes;
    // return <PodcastEpisode episode={this.state.episodes[0]}/>

    let episodes1to14 = episodes.slice(1, 15);

    return  (
      <div>
        <PodcastEpisode firstEpisode={true} episode={this.state.episodes[0]} />
        { episodes1to14.map(episode => {
          return <PodcastEpisode firstEpisode={false} key={episode.id} episode={episode}/>
        })}
    </div>
    )
  }

  render() {
    if (this.props.podcast) {
      const podcast = this.props.podcast;

      return (
        <div className='podcast view'>
          <img src={podcast.imageUrl} alt='' />
          <h3 className='podcast-title'>{podcast.title}</h3>
          <h5 className='podcast-authors'>{podcast.artists}</h5>
          <p className='podcast-description'>{podcast.description}</p>
          <div className='section-title'><h3>Episodes</h3></div>
          <div className='podcast-episodes'>
            { this.props.episodes && this.renderEpisodes() }
          </div>
        </div>
      )
    } else {
      return <div></div>
    }
  }
}

function mapStateToProps(state) {
  return {
    episodes: state.podcast.episodes,
    podcast: state.podcast.podcast };
}

export default connect(mapStateToProps, { fetchEpisodes, fetchPodcast })(Podcast);
