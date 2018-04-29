import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import ListSettings from '../ListSettings';
import PodcastGridItem from '../PodcastGridItem';
import PodcastListItem from '../PodcastListItem';

import '../../styles/styles.css';

class PodcastsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'grid',
      category: this.props.selectedCategory
    }
  }


  renderListView() {
    let podcasts;
    if (this.state.category === 0) {
      podcasts = _.sortBy(this.props.podcasts, 'title');
    } else {
      podcasts = _.sortBy(this.props.categories[this.state.category], 'title');
    }

    return (
      <div className='podcast-list'>
       { _.map(podcasts, podcast => (
         <PodcastListItem podcast={podcast} key={podcast.id}/>
      ))}
      </div>);
  }

  renderGridView() {
    let podcasts;
    if (this.state.category === 0) {
      podcasts = _.sortBy(this.props.podcasts, 'title');
    } else {
      podcasts = _.sortBy(this.props.categories[this.state.category], 'title');
    }

    return (
      <div className='podcast-grid'>
       { _.map(podcasts, podcast => (
        <PodcastGridItem podcast={podcast} key={podcast.id}/>
      ))}
      </div>);
  }

  render () {
    // Render podcasts if "All" is currently selected or the selected category is loaded to state
    if (this.props.selectedCategory === 0 || this.props.categories[this.props.selectedCategory]) {
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
    podcasts: state.podcasts,
    categories: state.categories
  };
}

export default connect(mapStateToProps)(PodcastsContainer);
