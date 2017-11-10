import React from 'react';
import { connect } from 'react-redux';
import { removeToDo } from '../actions/toDoActions';

class ToDoItem extends React.Component {
    checkOff(event) {
        this.props.removeToDo(this.props.todo)
    }

    render() {
        return (
            <p className="ToDoItem">
            <button onClick = {this.checkOff.bind(this)}> X </button>
            <span className="ToDoItem-text">{this.props.todo}</span>
            </p>
        );
    }
}

export default connect(null, {removeToDo})(ToDoItem);