import React, { Component } from 'react';
import FaCaretDown from 'react-icons/lib/fa/caret-down';
import MdApps from 'react-icons/lib/md/apps';
import FaList from 'react-icons/lib/fa/list';

import '../../styles/styles.css';


class ListSettings extends Component {

  render () {
    return (
      <div className='list-settings'>
        <p className='list-sort'>
          <span className='label'>Sort by:</span> A-Z <FaCaretDown className='icon'/></p>
        <p className='list-toggle-view'>
          <FaList className='icon' onClick={this.props.handleViewChange}/> Show {this.props.currentView === 'Grid' ? 'List' : 'Grid' } View</p>
      </div>
    )
  }
}

export default ListSettings;
