import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToDo, toggle } from '../actions/toDoActions';

class ToDo extends Component {
    constructor() {
        super();
        this.state = {newToDo: ''}
    }

  changeHandler = (event) => {
      this.setState({ newToDo: event.target.value });
  }

  submitHandler = () => {
      addToDo(this.state.newToDo);
      this.state.newToDo = '';
  }


  render() {
    return (
      <div className="ToDo">
          <h1>To Do List</h1>
          <ul>
              {this.props.todo.map((todo, i) => {
                  return (
                      <div>
                          <p className="ToDoItem" key={i}>
                          <button onClick = {() => toggle(todo)}> X </button>
                          <span className="ToDoItem-text">{todo}</span>
                          </p>
                      </div>
                  );
              })}
          </ul>
          <input onChange={this.changeHandler} placeholder="new todo" value={this.state.newToDo} />
          <button onClick={this.submitHandler}>Submit</button>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
    return {
        todo: state.todo,
    };
};

export default connect(mapStateToProps, { addToDo, toggle })(ToDo);
