import { ADD_TODO, REMOVE_TODO } from '../actions/toDoActions';

const toDoReducer = (todo=[], action) => {
    switch (action.type) {
        case ADD_TODO:
            todo.push(action.payload);
            return todo;
        case REMOVE_TODO:
            todo.forEach((item, i) => {
                if (action.payload === item) {
                    todo.splice(i, 1);
                }
            })
            return todo;
        }
        return todo;           
}

export default toDoReducer;