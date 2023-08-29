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
        const response = await fetch('/api/configPomodoroPrisma', {
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
            <div class="m-auto w-[50vh] h-[40vh] min-h-[55vh]  flex flex-col rounded-[1.5em] bg-slate-500 text-white ">
                <div>
                    <h2 class="ml-10 mt-5 flex mr-1 gap-5 text-lg text-white font-semibold"> Dato: Ingrese la tarea</h2>
                    <input type='text' value={dato} onChange={e => setDato(e.target.value)} class="text-slate-500 w-[12em] mt-5 ml-11"></input>
                </div>

                <div>
                    <h2 class="ml-10 mt-5 flex mr-1 gap-5 text-lg text-white font-semibold"> Ingrese las horas de trabajo</h2>
                    <input type='time' value={timerWork} onChange={e => setTimerWork(e.target.value)} class="text-slate-500 w-[12em] mt-5 ml-11"></input>
                </div>

                <div>
                    <h2 class="ml-10 mt-5 flex mr-1 gap-5 text-lg text-white font-semibold"> Ingrese las horas de recreo</h2>
                    <input type='time' value={RestTime} onChange={e => setRestTime(e.target.value)} class="text-slate-500 w-[12em] mt-5 ml-11"></input>
                </div>

                <div class="relative">
                    <button onClick={submitTimer} className='mt-10 ml-[3em] px-4 py-1 text-sm text-white-600 font-semibold rounded-full border border-slate-200 hover:text-white hover:bg-slate-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-slate-600 focus:ring-offset-2'>Submit Timer</button>
                    
                </div>

            </div>
           
        </>
    )

}

export default TimersPage