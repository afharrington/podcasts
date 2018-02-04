import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Views
import Home from './views/Home';
import Featured from './views/Featured';

// Global Components
import Header from './components/Header';
import Footer from './components/Footer';

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
            <Route exact path='/featured' component={Featured} />
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
