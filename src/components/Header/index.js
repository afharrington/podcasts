import React, { Component } from 'react';
import '../../styles/styles.css';

class Header extends Component {

  render() {
    return (
      <div className='header'>
        <div className='brand'>
          <h5>CodeCasts</h5>
        </div>
        <nav className='menu'>
          <ul>
            <li>Featured</li>
            <li>Browse</li>
            <li>About</li>
            <li className="search"><input></input></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Header;
