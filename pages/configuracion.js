import Navigations from '../components/navigations'
import { FiClock } from "react-icons/fi";
import { signIn, signOut, useSession } from 'next-auth/react';
import { IoTimerOutline } from "react-icons/io5";
import { CgSandClock } from "react-icons/cg";
import Image from 'next/image'


export default function Configuracion() {
    
    const { data: session } = useSession();

    const handleredirect = () =>{
        signOut();
        window.location.href="https://cofocus.vercel.app/login"
    }

    const handlerredirectcalendar = () =>{
        window.location.href="https://cofocus.vercel.app/calendar"
    }

    const handlerredirectTimer = () =>{
        window.location.href="https://cofocus.vercel.app/pomodoro"
    }

    const handlerredirectrandomTask = () =>{
        window.location.href="https://cofocus.vercel.app/randomtasks"
    }

    const handlerredirectTasks = () =>{
        window.location.href="https://cofocus.vercel.app/tasks"
    }

    const handlerredirectayuda = () =>{
        window.location.href="https://cofocus.vercel.app/conocemas"
    }

    
    return (
        <>
            <div className="help bg-gradient-to-b from-[#1D1261] to-[#1B153F]">
            <Navigations openConf={false} />
            <div className="relative h-24 text-white qcy3 pt-0">
                <h2 className="absolute font-semibold top-9 left-20 h-22 w-120">{session?.user?.name || 'Nombre de Usuario'}</h2>
                <Image
                    className="rounded-3xl"
                    width={70}
                    height={70}
                    src={session?.user?.image}
                    alt="User Image"
                />
                <Image 
                className="absolute right-4 top-8 h-8 w-8" 
                width={70}
                height={70}
                src="/Images/Setting.png"
                alt="Settings"></Image>
            </div>

            <button onClick={() => handlerredirectcalendar()}className="relative h-20 text-white">
                <h2 className="absolute top-3 left-20 h-22 w-120 text-2xl font-semibold">Calendario</h2>
                <h6 className="absolute top-11 left-20 h-22 w-120">Ponte al dia con tus responsabilidades</h6>
                <Image width={70} height={70} class="absolute top-5 left-4 h-10 w-10" src="/Images/Calendar.png"></Image>
            </button>

            <button onClick={handlerredirectTasks} className="relative h-20 text-white">
                <h2 className="absolute top-3 left-20 h-22 w-120 text-2xl font-semibold">Tareas</h2>
                <h6 className="absolute top-11 left-20 h-22 w-120">Mira tu tareas pendientes</h6>
                <Image width={70} height={70} class="absolute top-5 left-4 h-10 w-10" src="/Images/Chart.png"></Image>
            </button>

            <button onClick={() => handlerredirectTimer()} className="relative h-20 text-white">
                <h2 className="absolute top-3 left-20 h-22 w-120 text-2xl font-semibold">Timer Pomodoro</h2>
                <h6 className="absolute top-11 left-20 h-22 w-120">Personaliza tus tiempos</h6>
                <IoTimerOutline class="absolute top-5 left-4 h-10 w-10 "></IoTimerOutline>
            </button>

            <button onClick={handlerredirectrandomTask} className="relative h-20 text-white">
                <h2 className="absolute top-3 left-20 h-22 w-120 text-2xl font-semibold" >Tareas Espontaneas</h2>
                <h6 className="absolute top-11 left-20 h-22 w-120">Sigue el hilo al profesor</h6>
                <CgSandClock class="absolute top-5 left-4 h-10 w-10" src="Images/lock-closed.png"></CgSandClock>
            </button>

            <button onClick={handlerredirectayuda} className="relative h-20 text-white">
                <h2 className="absolute top-3 left-20 h-22 w-120 text-2xl font-semibold">Ayuda</h2>
                <h6 className="absolute top-11 left-20 h-22 w-120">Informacion que te puede ser util</h6>
                <Image width={70} height={70} class="absolute top-5 left-4 h-10 w-10" src="/Images/info.png"></Image>
            </button>

            <div className="relative h-20 text-white">
                <button className="absolute top-3 left-20 h-22 w-120 text-2xl font-semibold" onClick={() => handleredirect()}>Cerrar Sesión</button>
                <button className="absolute top-11 left-20 h-22 w-120" onClick={() => handleredirect()}>Salir de tu cuenta</button>
                <Image width={70} height={70} class="absolute top-5 left-4 h-10 w-10" src="/Images/Sign_out.png"></Image>
            </div>
        </div>
        </>
    )
}