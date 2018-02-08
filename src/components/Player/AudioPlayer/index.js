import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import Moment from 'react-moment';
import FaPlayCircle from 'react-icons/lib/fa/play-circle';
import FaPauseCircle from 'react-icons/lib/fa/pause-circle';
import FaBackward from 'react-icons/lib/fa/backward';
import FaForward from 'react-icons/lib/fa/forward';

class AudioPlayer extends Component {

    state = {
      url: this.props.audioUrl,
      playing: false,
      volume: 0.8,
      muted: false,
      played: 0,
      loaded: 0,
      duration: 0,
      playbackRate: 1.0
    }

    load = url => {
      this.setState({
        url,
        played: 0,
        loaded: 0
      })
    }

    playPause = () => {
      this.setState({ playing: !this.state.playing })
    }

    stop = () => {
      this.setState({ url: null, playing: false })
    }

    setVolume = e => {
      this.setState({ volume: parseFloat(e.target.value) })
    }

    toggleMuted = () => {
      this.setState({ muted: !this.state.muted })
    }

    setPlaybackRate = e => {
      this.setState({ playbackRate: parseFloat(e.target.value) })
    }

    onPlay = () => {
      this.setState({ playing: true })
    }

    onPause = () => {
      this.setState({ playing: false })
    }

    onRewind = () => {
      let currentTime = this.state.played * this.state.duration;
      let rewindTo = currentTime - 15;
      rewindTo = rewindTo / this.state.duration;
      this.player.seekTo(rewindTo);
    }

    onFastForward = () => {
      let currentTime = this.state.played * this.state.duration;
      let fastForwardTo = currentTime + 30;
      fastForwardTo = fastForwardTo / this.state.duration;
      this.player.seekTo(fastForwardTo);
    }

    onSeekMouseDown = e => {
      this.setState({ seeking: true })
    }

    onSeekChange = e => {
      this.setState({ played: parseFloat(e.target.value) })
    }

    onSeekMouseUp = e => {
      this.setState({ seeking: false })
      this.player.seekTo(parseFloat(e.target.value))
    }

    onProgress = state => {
      // We only want to update time slider if we are not currently seeking
      if (!this.state.seeking) {
        this.setState(state)
      }
    }

    renderLoadButton = (url, label) => {
      return (
        <button onClick={() => this.load(url)}>
          {label}
        </button>
      )
    }

    ref = player => {
      this.player = player
    }

  convertSecondsToString(time) {
    time  = Math.floor(time);
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time - (hours * 3600)) / 60);
    let seconds = time - (hours * 3600) - (minutes * 60);

    if (hours === 0) { hours = ''; };
    if (hours > 0 && hours < 10) { hours = '0'+hours+':'; }
    if (minutes < 10) { minutes = '0'+minutes; }
    if (seconds < 10) { seconds = '0'+seconds; }
    let formattedTime = hours+minutes+':'+seconds;

    return formattedTime;
  }


  render() {
    const {
      url, playing, volume, muted,
      played, loaded, duration,
      playbackRate
    } = this.state;

    let percentPlayed = Math.floor(played * 100);


    let inputStyle = {
      background: `linear-gradient(to right, #bababa ${percentPlayed}%, #ffffff 0%)`
    }

    let buttonClass = playing ? 'pause-button' : 'play-button';

    return (
      <div className='audio-player'>

          <input
           type='range' min={0} max={1} step='any'
           value={played}
           onMouseDown={this.onSeekMouseDown}
           onChange={this.onSeekChange}
           onMouseUp={this.onSeekMouseUp}
           style={inputStyle}
          />

          <div className='audio-player-duration'>
            <p>{this.convertSecondsToString(duration * played)}</p>
            <p>- {this.convertSecondsToString(duration - (duration * played))}</p>
          </div>

          <ReactPlayer
             ref={this.ref}
             className='react-player'
             width='100%'
             height='100%'
             url={this.props.audioUrl}
             playing={playing}
             playbackRate={playbackRate}
             volume={volume}
             muted={muted}
             onPlay={this.onPlay}
             onPause={this.onPause}
             onEnded={() => this.setState({ playing: false })}
             onProgress={this.onProgress}
             onDuration={duration => this.setState({ duration })}
           />

           <div className='audio-player-controls'>
             <FaBackward className='back' onClick={this.onRewind.bind(this)} />
             { playing ? <FaPauseCircle className='pause' onClick={this.onPause.bind(this)}/> : <FaPlayCircle className='play' onClick={this.onPlay.bind(this)}/> }
             <FaForward className='forward' onClick={this.onFastForward.bind(this)}/>
           </div>

      </div>
    )
  }
}

export default AudioPlayer;
