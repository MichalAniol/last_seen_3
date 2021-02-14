import React from 'react';
import NiceButton from './NiceButton';

const TimeStampInputContainer = props => {

    const handleIsNumber = e => {
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            props.setStap(e.target.value)
        } else props.setStap(props.value);
    }

    return (<div className='center'>
        <div className='input-name'>time stamp:</div>
        <input
            id='lastSeen'
            value={props.value}
            onChange={e => handleIsNumber(e)}>
        </input>
        <NiceButton
            text='now'
            onClick={props.handleSetNow}
        ></NiceButton>
    </div>
    );
}

export default TimeStampInputContainer;