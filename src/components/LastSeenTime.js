import React, { useState, useEffect } from 'react';

const LastSeenTime = props => {
    const [text, setText] = useState('');

    useEffect(() => {
        if (props.sec < 0) {
            setText('not yet.');

        } else if (props.sec < 60 && props.sec >= 0) {
            setText(props.sec === 1 ? ' second ago.' : ' seconds ago.')

        } else if (props.sec >= 60) {
            let min = Math.floor(props.sec / 60);
            setText(min === 1 ? ' minute ago.' : ' minutes ago.')
        }
    });

    return (<span>{text}</span>)
}

export default LastSeenTime;