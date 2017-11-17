import React from 'react';
import Note from './Note';

export default (props) => {
    const notes = props.notes.map((note, i) => <Note note={note} key={i} index={i} />);
    return(
    <div>
        <ul>
            { notes }
        </ul>
        </div>
    )
}