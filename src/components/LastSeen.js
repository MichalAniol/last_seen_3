import React, { useState, useEffect, useRef } from 'react';
import LastSeenTime from "./LastSeenTime";
import LastSeenSufix from "./LastSeenSufix";

const LastSeen = props => {

    const SECOND = 1000;
    const STEP_SEC = 1;
    const STEP_MIN = 60;

    const [sec, setSec] = useState(0);

    const timeout = useRef();

    const startTicking = (startTime, step) => {
        timeout.current = setTimeout(() => {
            setSec(sec => sec + step)
        }, startTime, step);
    }

    useEffect(() => {
        let now = Date.now();
        let nowTimeStamp = Math.floor(now / SECOND);
        let perfectTiming = SECOND - (now % SECOND); // time remaining to the full second
        let secPassed = nowTimeStamp - props.timeStamp;

        setSec(secPassed);
        if (secPassed < 0) {

            let timeToStartCounting = (-secPassed * SECOND) + perfectTiming - SECOND; // time to start sec ticking

            startTicking(timeToStartCounting, STEP_SEC);

            console.log('%c time to start counting: ', 'background: red; color: #003300', timeToStartCounting)
        } else if (secPassed < STEP_MIN && secPassed >= 0) {

            startTicking(perfectTiming, STEP_SEC); // immediate start

            console.log('%c time to increase seconds: ', 'background: grey; color: #003300', perfectTiming)
        } else {

            let leftSecTicks = (STEP_MIN - STEP_SEC) - (secPassed % STEP_MIN);
            let timeToIncreaseMin = (leftSecTicks * SECOND) + perfectTiming; // time left to the full minute

            startTicking(timeToIncreaseMin, STEP_MIN)

            console.log('%c time to increase minutes: ', 'background: green; color: #003300', timeToIncreaseMin)
        }

        return () => { clearTimeout(timeout.current); }
    }, [props.timeStamp, sec])

    return (
        <div className='timer'>
            <LastSeenSufix sec={sec}> </LastSeenSufix>
            <LastSeenTime sec={sec}> </LastSeenTime>
        </div>
    );
}

export default LastSeen;