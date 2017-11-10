import React from 'react';

export default (props) => {
    const notes = props.notes.map((note, i) => {note});
    return(
    <div>
        <h1>Notepad</h1>
        <ul>
            { notes }
        </ul>
        </div>
    )
}