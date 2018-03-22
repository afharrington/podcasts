import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Views
import Home from './views/Home';
import Featured from './views/Featured';
import Browse from './views/Browse';
import Podcast from './views/Podcast';

// Global Components
import Header from './components/Header';
import Footer from './components/Footer';
import Player from './components/Player';

// Global Styles
import './styles/styles.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/featured' component={Featured} />
            <Route path='/browse' component={Browse} />
            <Route path='/podcast/:showId' component={Podcast} />
          </Switch>
          <Player/>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
