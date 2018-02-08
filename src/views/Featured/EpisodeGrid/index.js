import React, { Component } from 'react';

import EpisodeGridItem from '../EpisodeGridItem';

import '../../../styles/styles.css';


class EpisodeGrid extends Component {

  renderGridItems() {
    return this.props.recentEpisodes.map(episode => {
      return (
        <EpisodeGridItem episode={episode} />
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
