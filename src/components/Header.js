import React, { Component } from 'react';
import { Nav } from './';

class Header extends Component {
  render() {
    return (
      <div className="Header">
          <div>
              <h1>Day Planner</h1>
              <Nav />
          </div>
      </div>
    );
  }
}

export default Header;
