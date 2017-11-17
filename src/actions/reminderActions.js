import React from 'react';
export const ADD_REMINDER = 'ADD_NOTE';

export const addReminder = (reminder) => {
    return {
        type: ADD_REMINDER,
        payload: reminder
    };
};