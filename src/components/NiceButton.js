import React from 'react';


const NiceButton = props => {
    return (
        <button
            onClick={props.onClick}
        >{props.text}</button>
    );
}

export default NiceButton