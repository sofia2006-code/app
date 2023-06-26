import React from 'react'

const Alarm = React.forwardRef((_, ref)=>{
    return (
        <audio ref={ref}>
            <source src="/alarm.mp3" type="audio/mp3" />
            No te anda el audio 
        </audio>
    );
});

export default React.memo(Alarm);