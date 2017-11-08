import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <span><Link to="/today">Today</Link>  |  </span>
        <span><Link to="/week">This Week</Link>  |  </span>
        <span><Link to="/month">This Month</Link></span>
      </div>
    );
  }
}

export default Nav;
