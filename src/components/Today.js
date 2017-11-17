import React, { Component } from 'react';
import { ToDo, Notes, Calendar, Reminders } from './';

class Today extends Component {

  render() {
    return (
      <div className="Today">
          <div className="NarrowColumn">
              <ToDo />
          </div>
          <div className="WideColumn">
              <Notes />
          </div>
          <div className="NarrowColumn">
              <Calendar />
          </div>
      </div>
    );
  }
}

export default Today;
