export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'TOGGLE_TODO';

export const addToDo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo
    };
};

export const removeToDo = (todo) => {
    return{
        type: REMOVE_TODO,
        payload: todo
    };
};