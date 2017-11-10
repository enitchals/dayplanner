import { ADD_TODO, REMOVE_TODO } from '../actions/toDoActions';

const initialState = {todo:['a', 'b', 'test']};

const toDoReducer = (todo = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return todo.concat(action.payload);
        case REMOVE_TODO:
            return todo.filter((item) => item !== action.payload);
        default:
            return todo;
    }
}

export default toDoReducer;