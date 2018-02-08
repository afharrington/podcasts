import React, { Component } from 'react';
import AudioPlayer from './AudioPlayer';
import '../../styles/styles.css';

class Player extends Component {

  constructor(props) {
    super(props);

    this.state = {
      playing: true,
      collapsed: false,
      audioUrl: 'http://www.blogtalkradio.com/prodmgmttalk/2018/01/23/tei-160-how-lego-used-a-low-risk-high-value-approach-to-product-management.mp3',
      episodeTitle: 'TEI 160: How LEGO used a low-risk, high-value approach to product management'
    }

    this.togglePlayer = this.togglePlayer.bind(this);
  }

  togglePlayer() {
    this.setState({ collapsed: !this.state.collapsed });
  }

  render () {
    const episode = this.state;
    let playerClassName = this.state.collapsed ? 'player player-collapsed collapsed' : 'player player-expanded expanded';

    return (
      <div className={playerClassName}>
        <AudioPlayer className='player-audio' audioUrl={episode.audioUrl}/>
        <div className='player-title'>
          <span className='label'>Playing:</span>
          <p>{episode.episodeTitle}</p>
        </div>
        <div className='player-toggle' onClick={this.togglePlayer}><p>{ this.state.collapsed ? 'Show Player' : 'Hide'}</p></div>
      </div>
    )
  }
}

export default Player;
