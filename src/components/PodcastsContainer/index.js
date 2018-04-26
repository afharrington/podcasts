import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListSettings from '../ListSettings';
import PodcastGridItem from '../PodcastGridItem';
import PodcastListItem from '../PodcastListItem';

import '../../styles/styles.css';

class PodcastsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'grid',
      podcasts: [{
        podcastId: 507,
        podcastTitle: 'Front End Happy Hour',
        podcastImageUrl: 'http://is5.mzstatic.com/image/thumb/Music118/v4/1b/93/01/1b9301c5-e128-d3fd-9e37-d2dff166b831/source/600x600bb.jpg',
        podcastAuthors: 'Front End Happy Hour',
        podcastEpisodeTitle: 'Most recent episode of this podcast',
        podcastEpisodeDate: '2018-01-23T16:07:00'
      },{
        podcastId: 507,
        podcastTitle: 'Front End Happy Hour',
        podcastImageUrl: 'http://is5.mzstatic.com/image/thumb/Music118/v4/1b/93/01/1b9301c5-e128-d3fd-9e37-d2dff166b831/source/600x600bb.jpg',
        podcastAuthors: 'Front End Happy Hour',
        podcastEpisodeTitle: 'Most recent episode of this podcast',
        podcastEpisodeDate: '2018-01-23T16:07:00'
      },{
        podcastId: 507,
        podcastTitle: 'Front End Happy Hour',
        podcastImageUrl: 'http://is5.mzstatic.com/image/thumb/Music118/v4/1b/93/01/1b9301c5-e128-d3fd-9e37-d2dff166b831/source/600x600bb.jpg',
        podcastAuthors: 'Front End Happy Hour',
        podcastEpisodeTitle: 'Most recent episode of this podcast',
        podcastEpisodeDate: '2018-01-23T16:07:00'
      }]
    }
  }

  componentDidMount() {
    console.log(this.props.categories);
    console.log(this.props.selectedCategory);
  }

  renderListView() {
    return (
      <div className='podcast-list'>
       { this.props.categories[this.props.selectedCategory].map(podcast => (
         <PodcastListItem podcast={podcast}/>
      ))}
      </div>);
  }

  renderGridView() {
    return (
      <div className='podcast-grid'>
       { this.props.categories[this.props.selectedCategory].map(podcast => (
         <PodcastGridItem podcast={podcast}/>
      ))}
      </div>);
  }

  render () {
    // If categories are loaded to state, render the podcasts
    if (this.props.categories[this.props.selectedCategory]) {
      return (
        <div className='podcasts-container'>
          <ListSettings/>
          { this.state.view === 'grid' ? this.renderGridView() : this.renderListView() }
        </div>
      )
    } else {
      return <div></div>
    }
  }
}


function mapStateToProps(state) {
  return {
    categories: state.categories
  };
}

export default connect(mapStateToProps)(PodcastsContainer);
