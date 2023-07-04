import { useState } from 'react'

function TimersPage() {

    const [timers, setTimers] = useState([])
    const [dato, setDato] = useState('')
    const [timerWork, setTimerWork] = useState('')
    const [RestTime, setRestTime] = useState('')

    //no lo toques
    const fetchTimers = async () => {
        const response = await fetch('/api/timers')
        const data1 = await response.json()
        setTimers(data1)
    }

    //preguntarle a nacho como hago para submitear el id, el dato, workTime, restTime
    const submitTimer = async () => {
        const response = await fetch('/api/configPomodoro', {
            method: 'POST',
            body: JSON.stringify({ dato, tipo: "timer", timerWork, RestTime}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data1 = await response.json()
        console.log(data1)
    }

    return (
        <>
            <div>
                <h2> Dato: Ingrese la tarea</h2>
                <input type='text' value={dato} onChange={e => setDato(e.target.value)}></input>
            </div>

            <div>
                <h2> Ingrese las horas de trabajo</h2>
                <input type='number' value={timerWork} onChange={e => setTimerWork(e.target.value)}></input>
            </div>

            <div>
                <h2> Ingrese las horas de recreo</h2>
                <input type='number' value={RestTime} onChange={e => setRestTime(e.target.value)}></input>
            </div>

            <div class="relative h-32 w-32">
                <button onClick={submitTimer} className='absolute inset-x-0 bottom-0 h-16'>Submit Timer</button>

                <button onClick={fetchTimers} className='absolute inset-x-0 bottom-0 h-0'>Load Timers</button>
                {
                    timers.map(timer => {
                        return (
                            <div key={timer.id}>
                                {timer.id} {timer.dato} {timer.timerWork} {timer.RestTime}
                            </div>
                        )
                    })
                }
            </div>

        </>
    )

}

export default TimersPage