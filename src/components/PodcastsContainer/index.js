import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategory } from '../../actions/actions.js';
import _ from 'lodash';
import ListSettings from '../ListSettings';
import PodcastGridItem from '../PodcastGridItem';
import PodcastListItem from '../PodcastListItem';

import '../../styles/styles.css';

class PodcastsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'Grid',
      category: this.props.currentCategory || 0
    }

    this.handleViewChange = this.handleViewChange.bind(this);

  }

  componentDidMount() {
    if (this.state.category !== 0 && !(this.props.categories[this.state.category])) {
      this.props.fetchCategory(this.state.selectedCategory);
    }
  }


  handleViewChange() {
    if (this.state.view === 'Grid') {
      this.setState({ view: 'List'})
    } else {
      this.setState({ view: 'Grid'})
    }
  }


  renderListView() {
    let podcasts;
    if (this.props.currentCategory === 0) {
      podcasts = _.sortBy(this.props.podcasts, 'title');
    } else {
      podcasts = _.sortBy(this.props.categories[this.props.currentCategory], 'title');
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

    if (this.props.currentCategory === 0) {
      if (this.props.sortedBy == 'A-Z') {
        podcasts = _.sortBy(this.props.podcasts, 'title');
      } else {
        podcasts = _.sortBy(this.props.podcasts, 'title').reverse();
      }
    } else {
      if (this.props.sortedBy == 'A-Z') {
        podcasts = _.sortBy(this.props.categories[this.props.currentCategory], 'title');
      } else {
        podcasts = _.sortBy(this.props.categories[this.props.currentCategory], 'title').reverse();
      }
    }

    return (
      <div className='podcast-grid'>
       { _.map(podcasts, podcast => (
        <PodcastGridItem podcast={podcast} key={podcast.id}/>
      ))}
      </div>);
  }

  render () {
    // Render podcasts if the selectory category's podcasts are loaded to state
    // of if "All" is selected (category 0)
    if (this.props.currentCategory === 0 || this.props.categories[this.props.currentCategory]) {
      return (
        <div className='podcasts-container'>

          <ListSettings
            currentView={this.state.view}
            sortedBy={this.props.sortedBy}
            handleViewChange={this.handleViewChange}
            handleSortOrderChange={this.props.handleSortOrderChange} />
          { this.state.view === 'Grid' ? this.renderGridView() : this.renderListView() }
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
}


function mapStateToProps(state) {
  return {
    podcasts: state.podcasts,
    categories: state.categories,
    currentCategory: state.currentCategory
  };
}

export default connect(mapStateToProps, { fetchCategory })(PodcastsContainer);
