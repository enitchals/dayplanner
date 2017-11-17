import React from 'react';
import { connect } from 'react-redux';

class Note extends React.Component {
    render() {
        return (
            <p className="Note">
            <div className="Note-title">{this.props.note.title}</div>
            <div className="Note-text">{this.props.note.text}</div>
            </p>
        );
    }
}

export default Note;