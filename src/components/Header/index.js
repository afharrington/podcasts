import React, { Component } from 'react';
import '../../styles/styles.css';

class Header extends Component {

  render() {
    return (
      <div className='header'>
        <div className='brand'>
          <a href='/'><h5>CodeCasts</h5></a>
        </div>
        <nav className='menu'>
          <ul>
            <li><a href='/featured'>Featured</a></li>
            <li><a href='/browse'>Browse</a></li>
            <li><a href='/about'>About</a></li>
            <li className="search"><input></input></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Header;
