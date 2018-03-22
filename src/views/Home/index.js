import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import _ from 'lodash';
import { fetchAllPodcasts } from '../../actions/actions.js';
import '../../styles/styles.css';

class Home extends Component {

  componentDidMount() {
    this.props.fetchAllPodcasts();
  }

  render() {
    return (
      <div className='home' style={{ backgroundImage: 'url(./img/microphone-background.png)' }} >
        <div className='home-text'>
          <h2>Podcast discovery for developers and tech industry professionals</h2>
          <div className='home-buttons-container'>
            <NavLink to='/featured'><button className='home-button-featured'>Featured Podcasts</button></NavLink>
            <NavLink to='/browse'><button className='home-button-browse'>Browse by Topic</button></NavLink>
          </div>
        </div>
      </div>
    )
  }
}


export default connect(null, { fetchAllPodcasts })(Home);
