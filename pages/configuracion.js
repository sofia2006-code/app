import Navigations from '../components/navigations'
import { FiClock } from "react-icons/fi";
import { signIn, signOut, useSession } from 'next-auth/react';


export default function configuracion() {
    
    const { data: session } = useSession()

    const handleredirect = () =>{
        signOut();
        window.location.href="http://localhost:3000/login"
    }

    const handlerredirectcalendar = () =>{
        window.location.href="http://localhost:3000/calendar"
    }

    const handlerredirectTimer = () =>{
        window.location.href="http://localhost:3000/pomodoro"
    }

    
    return (
        <>
            <div className="help bg-gradient-to-b from-[#1D1261] to-[#1B153F]">
            <Navigations openConf={false} />
            <div className="relative h-24 text-white qcy3 pt-0">
                <h2 className="absolute font-semibold top-9 left-20 h-22 w-120">{session?.user?.name || 'Nombre de Usuario'}</h2>
                <img class="rounded-3xl absolute top-7 left-4 h-10 w-10" src={session?.user?.image}></img>
                <img class="absolute right-4 top-8 h-8 w-8" src="Images/Setting.png"></img>
            </div>

            <button onClick={() => handlerredirectcalendar()}className="relative h-20 text-white">
                <h2 className="absolute top-3 left-20 h-22 w-120 text-2xl font-semibold">Calendario</h2>
                <h6 className="absolute top-11 left-20 h-22 w-120">Ponte al dia con tus responsabilidades</h6>
                <img class="absolute top-5 left-4 h-10 w-10" src="Images/Calendar.png"></img>
            </button>

            <div className="relative h-20 text-white">
                <h2 className="absolute top-3 left-20 h-22 w-120 text-2xl font-semibold">Tareas</h2>
                <h6 className="absolute top-11 left-20 h-22 w-120">Mira tu tareas pendientes</h6>
                <img class="absolute top-5 left-4 h-10 w-10" src="Images/Chart.png"></img>
            </div>

            <button onClick={() => handlerredirectTimer()} className="relative h-20 text-white">
                <h2 className="absolute top-3 left-20 h-22 w-120 text-2xl font-semibold">Timer Pomodoro</h2>
                <h6 className="absolute top-11 left-20 h-22 w-120">Personaliza tus tiempos</h6>
                <img class="absolute top-5 left-4 h-10 w-10 " src="Images/timer.svg"></img>
            </button>

            <div className="relative h-20 text-white">
                <h2 className="absolute top-3 left-20 h-22 w-120 text-2xl font-semibold" >Tareas Espontaneas</h2>
                <h6 className="absolute top-11 left-20 h-22 w-120">Sigue el hilo al profesor</h6>
                <img class="absolute top-5 left-4 h-10 w-10" src="Images/lock-closed.png"></img>
            </div>

            <div className="relative h-20 text-white">
                <h2 className="absolute top-3 left-20 h-22 w-120 text-2xl font-semibold">Ayuda</h2>
                <h6 className="absolute top-11 left-20 h-22 w-120">Informacion que te puede ser util</h6>
                <img class="absolute top-5 left-4 h-10 w-10" src="Images/info.png"></img>
            </div>

            <div className="relative h-20 text-white">
                <button className="absolute top-3 left-20 h-22 w-120 text-2xl font-semibold" onClick={() => handleredirect()}>Cerrar Sesión</button>
                <button className="absolute top-11 left-20 h-22 w-120" onClick={() => handleredirect()}>Salir de tu cuenta</button>
                <img class="absolute top-5 left-4 h-10 w-10" src="Images/Sign_out.png"></img>
            </div>
        </div>
        </>
    )
}