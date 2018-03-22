import React, { Component } from 'react';
import EpisodeGridItem from '../EpisodeGridItem';

import '../../../styles/styles.css';

// Episodes shown on the Featured page
class EpisodeGrid extends Component {

  renderGridItems() {
    return this.props.recentPodcasts.map(podcast => {
      return (
        <EpisodeGridItem key={podcast.id} podcastTitle={podcast.title} episode={podcast.episodes[0]} imageUrl={podcast.imageUrl} />
      )
    })
  }

  render () {
    return (
      <div className='episode-grid'>
        {this.renderGridItems()}
      </div>

    )
  }
}

export default EpisodeGrid;
