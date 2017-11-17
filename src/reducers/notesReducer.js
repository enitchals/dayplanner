import { ADD_NOTE } from '../actions/noteActions';

const initialState = {notes:[]};

const notesReducer = (notes = initialState, action) => {
    switch (action.type) {
        case ADD_NOTE:
            return notes.concat(action.payload);
        default:
            return notes;
    }
}

export default notesReducer;