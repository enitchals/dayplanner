import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { Header, Home, Today, ThisWeek, ThisMonth } from './components'

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Route path exact="/" component={Home} />
        <Route path="/today" component={Today} />
        <Route path="/week" component={ThisWeek} />
        <Route path="/month" component={ThisMonth} />
      </div>
    );
  }
}

export default App;
