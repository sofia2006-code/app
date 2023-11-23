import React from 'react'
import { forwardRef } from 'react';

const Alarm = (_, ref) => {
    return (
        <audio ref={ref}>
            <source src="/alarm.mp3" type="audio/mp3" />
            {/* No te anda el audio  */}
        </audio>
    );
}

export default forwardRef(Alarm);