import React, { Component } from 'react';
import FaPlayCircle from 'react-icons/lib/fa/play-circle';
import FaCog from 'react-icons/lib/fa/cog';
import FaAngleDoubleRight from 'react-icons/lib/fa/angle-double-right';

import '../../styles/styles.css';

// Use correct episode item type depending on prop (multi or single show)
// Episode Grid will receive also receive 15 episodes as props from the view

class EpisodeGrid extends Component {

  render () {
    const thumbnailUrl = 'http://is2.mzstatic.com/image/thumb/Music122/v4/8f/2a/e6/8f2ae649-7ff1-c8ef-5d57-62800ef9b006/source/600x600bb.jpg';

    return (
      <div className='episode-grid'>

        <div className='episode-grid-item'>
          <img src={thumbnailUrl} alt=''/>
          <h5 className='episode-title'>#1550 How to do your own PR right</h5>
          <p className='episode-date'>Aired: 02/03/2018</p>
          <div className='episode-play'>
            <FaPlayCircle className='play-button'/>
            <p>Or listen with: <span class='player-selection'>Spotify</span> <FaCog className='settings-button'/></p>
          </div>
          <div className='episode-link'><FaAngleDoubleRight className='go-button'/></div>
        </div>


        <div className='episode-grid-item'>
          <img src={thumbnailUrl} alt=''/>
          <h5 className='episode-title'>#1550 How to do your own PR right</h5>
          <p className='episode-date'>Aired: 02/03/2018</p>
          <div className='episode-play'>
            <FaPlayCircle className='play-button'/>
            <p>Or listen with: <span class='player-selection'>Spotify</span> <FaCog className='settings-button'/></p>
          </div>
          <div className='episode-link'><FaAngleDoubleRight className='go-button'/></div>
        </div>


        <div className='episode-grid-item'>
          <img src={thumbnailUrl} alt=''/>
          <h5 className='episode-title'>#1550 How to do your own PR right</h5>
          <p className='episode-date'>Aired: 02/03/2018</p>
          <div className='episode-play'>
            <FaPlayCircle className='play-button'/>
            <p>Or listen with: <span class='player-selection'>Spotify</span> <FaCog className='settings-button'/></p>
          </div>
          <div className='episode-link'><FaAngleDoubleRight className='go-button'/></div>
        </div>


        <div className='episode-grid-item'>
          <img src={thumbnailUrl} alt=''/>
          <h5 className='episode-title'>#1550 How to do your own PR right</h5>
          <p className='episode-date'>Aired: 02/03/2018</p>
          <div className='episode-play'>
            <FaPlayCircle className='play-button'/>
            <p>Or listen with: <span class='player-selection'>Spotify</span> <FaCog className='settings-button'/></p>
          </div>
          <div className='episode-link'><FaAngleDoubleRight className='go-button'/></div>
        </div>


        <div className='episode-grid-item'>
          <img src={thumbnailUrl} alt=''/>
          <h5 className='episode-title'>#1550 How to do your own PR right</h5>
          <p className='episode-date'>Aired: 02/03/2018</p>
          <div className='episode-play'>
            <FaPlayCircle className='play-button'/>
            <p>Or listen with: <span class='player-selection'>Spotify</span> <FaCog className='settings-button'/></p>
          </div>
          <div className='episode-link'><FaAngleDoubleRight className='go-button'/></div>
        </div>


        <div className='episode-grid-item'>
          <img src={thumbnailUrl} alt=''/>
          <h5 className='episode-title'>#1550 How to do your own PR right</h5>
          <p className='episode-date'>Aired: 02/03/2018</p>
          <div className='episode-play'>
            <FaPlayCircle className='play-button'/>
            <p>Or listen with: <span class='player-selection'>Spotify</span> <FaCog className='settings-button'/></p>
          </div>
          <div className='episode-link'><FaAngleDoubleRight className='go-button'/></div>
        </div>

      </div>


    )
  }
}

export default EpisodeGrid;
