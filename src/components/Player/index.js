import React, { Component } from 'react';

import '../../styles/styles.css';

class Player extends Component {

  render () {


    return (
      <div className='player'>

        <audio></audio>

        <p>Playing:</p>
        <p>GraphQL? Here is what you need to know!</p>
        <p>Hide</p>
      </div>
    )
  }
}

export default Player;
