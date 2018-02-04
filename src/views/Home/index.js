import React, { Component } from 'react';
import '../../styles/styles.css';

class Home extends Component {

  render() {
    return (
      <div className='home view' style={{ backgroundImage: 'url(./img/microphone-background.png)' }} >
        <div className='home-text'>
          <h2>Podcast discovery for developers and tech industry professionals</h2>
          <div className='home-buttons-container'>
            <button>Featured podcasts</button>
            <button>Browse by topic</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
