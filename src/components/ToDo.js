import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToDo, removeToDo } from '../actions/toDoActions';
import ToDoList from './ToDoList';
import { store } from '../';

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {newToDo: ''}
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

  changeHandler = (event) => {
      this.setState({ newToDo: event.target.value });
  }

  submitHandler = () => {
      this.props.addToDo(this.state.newToDo);
      this.setState({newToDo: ''});
  }


  render() {
    return (
        <div>
        <ToDoList todo ={this.props.todo} />
        <input type="text" onChange={this.changeHandler} placeholder="new todo" value={this.state.newToDo}/>
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

export default connect(mapStateToProps, { addToDo, removeToDo })(ToDo);
