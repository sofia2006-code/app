import { useState } from 'react'

function TimersPage() {
    
    const [timers, setTimers] = useState([])
    const [dato, setDato] = useState('')
    const [timer, setTimer] = useState('')

    //no lo toques
    const fetchTimers = async () => {
        const response = await fetch ('/api/timers')
        const data = await  response.json()
        setTimers(data1)
    }

    //preguntarle a nacho como hago para submitear el id, el dato, workTime, restTime
    const submitTimer = async () => {
        const response = await fetch ('/api/timers', {
            method: 'POST',
            body: JSON.stringify({ timer }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data1 = await response.json()
        console.log(data1)
    
    return(
        <>
        <div>
            <h2> Dato: Ingrese el nivel de complejidad</h2>
            <input type='text' value={dato} onChange={e => setDato(e.target.value)}></input>
        </div>

        <div>
            <h2> Ingrese las horas de trabajo</h2>
            <input type='number' value={timer} onChange={e => setTimer(e.target.value)}></input>
        </div>
        
        <button onClick={submitTimer} className = 'absolute font-semibold top-20 h-22 w-120'>Submit Timer</button>

        <button onClick={fetchTimers}>Load Timers</button>
        {
            timers.map(timer => {
                return(
                    <div key={timer.id}>
                        {timer.id} {timer.dato} {timer.workTime} {timer.RestTime}
                    </div>
                )
            })
        }
        </>
    )
}
}

export default TimersPage