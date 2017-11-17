import { ADD_REMINDER } from '../actions/reminderActions';

const initialState = {reminders:[]};

const reminderReducer = (notes = initialState, action) => {
    switch (action.type) {
        case TODAYS_REMINDERS:
            return notes.filter(note => note.date=)
        case ADD_REMINDER:
            return reminders.concat(action.payload);
        default:
            return reminders;
    }
}

export default remindersReducer;