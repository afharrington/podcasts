import React, { Component } from 'react';
import FaCaretDown from 'react-icons/lib/fa/caret-down';
import MdApps from 'react-icons/lib/md/apps';
import FaList from 'react-icons/lib/fa/list';
import SortMenuPopup from './SortMenuPopup';
import '../../styles/styles.css';

class ListSettings extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    }

    this.showSortMenu = this.showSortMenu.bind(this);
    // this.handleSelectAll = this.handleSelectAll.bind(this);
  }

  showSortMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  // handleSortOrderChange(sortOption) {
  //   this.setState({ sortedBy: sortOption });
  //   this.showSortMenu();
  // }

  render () {
    return (
      <div className='list-settings'>

        <p className='list-sort'>
          <span className='label'>Sort by:</span> {this.props.sortedBy} <span className='icon'><FaCaretDown className='icon' onClick={this.showSortMenu}/></span>
        </p>

        <div> { this.state.menuOpen &&
          <SortMenuPopup
            sortedBy={this.props.sortedBy}
            handleSortOrderChange={this.props.handleSortOrderChange}
            onClickOutside={this.showSortMenu}
            closeSortMenu={this.showSortMenu}/>
          }
        </div>

        <p className='list-toggle-view'>
          <FaList className='icon' onClick={this.props.handleViewChange}/> Show {this.props.currentView === 'Grid' ? 'List' : 'Grid' } View</p>
      </div>
    )
  }
}


export default ListSettings;
