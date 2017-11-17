import React from 'react';
import { connect } from 'react-redux';

class Reminder extends React.Component {
    render() {
        return (
            <p className="Reminder">
            <div className="Reminder-title">{this.props.reminder.title}</div>
            <div className="Reminder-text">{this.props.reminder.text}</div>
            </p>
        );
    }
}

export default Reminder;