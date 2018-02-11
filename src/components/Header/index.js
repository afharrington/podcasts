import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/styles.css';

class Header extends Component {

  render() {
    return (
      <div className='header'>
        <div className='brand'>
          <NavLink to='/'><h5>CodeCasts</h5></NavLink>
        </div>
        <nav className='menu'>
          <ul>
            <NavLink to='/featured' activeClassName='active'>Featured</NavLink>
            <NavLink to='/browse' activeClassName='active'>Browse</NavLink>
            <NavLink to='/about' activeClassName='active'>About</NavLink>
            <li className="search"><input></input></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Header;
