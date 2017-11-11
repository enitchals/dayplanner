import React from 'react';
export const ADD_NOTE = 'ADD_NOTE';
export const CLEAR_NOTES = 'CLEAR_NOTES';

export const addNote = (note) => {
    return {
        type: ADD_NOTE,
        payload: note
    };
};

export const clearNotes = () => {
    return {
        type: CLEAR_NOTES,
        payload: []
    }
}