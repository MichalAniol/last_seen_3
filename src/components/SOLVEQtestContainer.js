import React, { useState, useEffect } from 'react';
import NiceButton from './NiceButton';
import TimeStampInputContainer from './TimeStampInputContainer';
import LastSeen from './LastSeen'

const SOLVEQtestContainer = () => {

    const getNow = () => {
        let now = Date.now();
        let nowTS = Math.floor(now / 1000);
        return nowTS;
    }

    const [inputTimeStamp, setInputTimeStamp] = useState(getNow());
    const [timeStamp, setTimeStamp] = useState(getNow());

    const handleSetNow = () => setInputTimeStamp(getNow());

    const setStamp = value => setInputTimeStamp(value);

    const handleSetStamp = () => setTimeStamp(inputTimeStamp);

    useEffect(() => {
        setTimeStamp(inputTimeStamp);
    }, []);

    return (
        <div className='wrap'>

            <TimeStampInputContainer
                setStap={setStamp}
                value={inputTimeStamp}
                handleSetNow={handleSetNow}
            ></TimeStampInputContainer>

            <LastSeen
                timeStamp={timeStamp}
            ></LastSeen>

            <NiceButton
                text='reset'
                onClick={handleSetStamp}
            ></NiceButton>

        </div>
    );
}

export default SOLVEQtestContainer;