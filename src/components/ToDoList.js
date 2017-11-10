import React from 'react';
import { addToDo, removeToDo } from '../actions/toDoActions';
import ToDoItem from './ToDoItem';


export default (props) => {
    const todos = props.todo.map((todo, i) => <ToDoItem todo={todo} key={i} index={i} />);
    return(
    <div className="ToDo">
        <h1>To Do List</h1>
        <ul>
            { todos }
        </ul>
        </div>
    )
}