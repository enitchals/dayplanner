import React from 'react';

export default (props) => {
    const notes = props.notes.map((note, i) => {note});
    return(
    <div>
        <h1>Notepad</h1>
        <ul>
            { props.notes.map((note, i) => <p>{note}</p>) }
        </ul>
        </div>
    )
}