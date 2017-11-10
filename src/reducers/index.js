import { combineReducers } from 'redux';
import toDoReducer from './toDoReducer';
import notesReducer from './notesReducer';

const reducers = combineReducers({
    todo: toDoReducer,
    notes: notesReducer
});

export default reducers;