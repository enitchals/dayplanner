import { ADD_NOTE, CLEAR_NOTES } from '../actions/noteActions';

const initialState = {notes:[]};

const notesReducer = (notes = initialState, action) => {
    switch (action.type) {
        case ADD_NOTE:
            return notes.concat(action.payload);
        case CLEAR_NOTES:
            return action.payload;
        default:
            return notes;
    }
}

export default notesReducer;