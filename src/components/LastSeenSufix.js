import React, { useState, useEffect } from 'react';

const LastSeenSufix = props => {

    const [time, setTime] = useState('');

    useEffect(() => {
        if (props.sec < 0) {
            setTime('');

        } else if (props.sec < 60 && props.sec >= 0) {
            setTime('' + props.sec);

        } else if (props.sec >= 60) {
            let min = Math.floor(props.sec / 60);
            setTime('' + min);
        }
    });

    return (<span className='time'>{time}</span>)
}

export default LastSeenSufix;