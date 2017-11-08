import { ADD_TODO, TOGGLE_TODO } from '../actions/toDoActions';

const initialState = {todo: []}

const toDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            state = {
                ...state,
                todo: state.todo.push([action.payload, false])
            };
        case TOGGLE_TODO:
            const toDoItems = state.todo;
            toDoItems.forEach((item, i) => {
                if (action.payload === item[0]) {
                    item.i[1] = !item.i[1];
                }
            })
            state = {...state,
            todo: toDoItems}
            return state;
    }
    return state;
}

export default toDoReducer;