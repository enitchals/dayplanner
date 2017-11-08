import { combineReducers } from 'redux';
import toDoReducer from './toDoReducer';

const reducers = combineReducers({
    todo: toDoReducer
});

export default reducers;