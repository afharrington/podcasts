import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import FaBars from 'react-icons/lib/fa/bars';
import MdClose from 'react-icons/lib/md/close';
import '../../styles/styles.css';

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      hamburgerOpen: false
    }

    this.toggleHamburger = this.toggleHamburger.bind(this);
  }

  toggleHamburger() {
    this.setState({ hamburgerOpen: !this.state.hamburgerOpen });
  }

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

        <div className='hamburger-button' onClick={this.toggleHamburger}>
          <FaBars/>
        </div>

          <div id='hamburger-menu' className={this.state.hamburgerOpen ? 'show' : 'hide' } key='hey'>
            <div className='menu-close-button' onClick={this.toggleHamburger}><MdClose/></div>
            <NavLink to='/featured' activeClassName='active'>Featured</NavLink>
            <NavLink to='/browse' activeClassName='active'>Browse</NavLink>
            <NavLink to='/about' activeClassName='active'>About</NavLink>
            <li className="search"><input></input></li>
          </div>


      </div>
    )
  }
}

export default Header;
