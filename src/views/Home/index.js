import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/styles.css';

class Home extends Component {

  render() {
    return (
      <div className='home' style={{ backgroundImage: 'url(./img/microphone-background.png)' }} >
        <div className='home-text'>
          <h2>Podcast discovery for developers and tech industry professionals</h2>
          <div className='home-buttons-container'>
            <button><NavLink to='/featured'>Featured Podcasts</NavLink></button>
            <button><NavLink to='/browse'>Browse by Topic</NavLink></button>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;