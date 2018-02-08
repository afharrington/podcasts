import React, { Component } from 'react';
import PodcastEpisode from './PodcastEpisode';

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
          episodeTitle: 'Episode 049 - Independent taste testing',
          episodeDuration: '32:05',
          episodeDate: '2018-01-22T04:05:07',
          episodeDescription: 'We are back in 2018, for the first episode of the New Year we have two special guests, Shirley Wu and Amy Wibowo to talk with us about freelancing and running your own business. We discuss how to start freelance work, how to manage clients and how to handle difficult clients.',
          audioUrl: 'http://feeds.soundcloud.com/stream/387211061-front-end-happy-hour-episode-049-independent-taste-testing.mp3'
        }
      ]
    }
  }

  render() {
    return (
      <div className='podcast view'>
        <img src={this.state.podcastImageUrl} alt='' />
        <h3 className='podcast-title'>{this.state.podcastTitle}</h3>
        <h5 className='podcast-authors'>{this.state.podcastAuthors}</h5>
        <h6 className='podcast-description'>{this.state.podcastDescription}</h6>
        <PodcastEpisode episode={this.state.episodes[0]}/>
      </div>
    )
  }
}

export default Podcast;
