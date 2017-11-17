import React from 'react';
import Reminder from './Reminder';

export default (props) => {
    const reminders = props.reminders.map((reminder, i) => <Reminder reminder={reminder} key={i} index={i} />);
    return(
    <div>
        <ul>
            { reminders }
        </ul>
        </div>
    )
}