import NavBar from './components/NavBar'

export default function configuracion() {
    return (
        <>
            <NavBar />
            <div className="relative bg-black h-24 text-white">
                <h2 className="absolute font-semibold top-9 left-20 h-22 w-120">Nombre de Usuario</h2>
                <img class="absolute top-7 left-4 h-10 w-10" src="Images/User.png"></img>
                <img class="absolute right-4 top-8 h-8 w-8" src="Images/Setting.png"></img>
            </div>

            <div class="bg-amber-800 h-0.4" ></div>

            <div className="relative h-20 bg-black text-white">
                <h2 className="absolute top-3 left-20 h-22 w-120 text-2xl font-semibold" >Seguridad</h2>
                <h6 className="absolute top-11 left-20 h-22 w-120">Cambiar de contrasenia</h6>
                <img class="absolute top-5 left-4 h-10 w-10" src="Images/lock-closed.png"></img>
            </div>

            <div className="relative h-20 bg-black text-white">
                <h2 className="absolute top-3 left-20 h-22 w-120 text-2xl font-semibold">Notificaciones</h2>
                <h6 className="absolute top-11 left-20 h-22 w-120">Personaliza Alarmas</h6>
                <img class="absolute top-5 left-4 h-10 w-10" src="Images/bell.png"></img>
            </div>

            <div className="relative h-20 bg-black text-white">
                <h2 className="absolute top-3 left-20 h-22 w-120 text-2xl font-semibold">Calendario</h2>
                <h6 className="absolute top-11 left-20 h-22 w-120">Ponte al dia con tus responsabilidades</h6>
                <img class="absolute top-5 left-4 h-10 w-10" src="Images/Calendar.png"></img>
            </div>

            <div className="relative h-20 bg-black text-white">
                <h2 className="absolute top-3 left-20 h-22 w-120 text-2xl font-semibold">Progreso</h2>
                <h6 className="absolute top-11 left-20 h-22 w-120">Mira tu progreso hasta ahora</h6>
                <img class="absolute top-5 left-4 h-10 w-10" src="Images/Chart.png"></img>
            </div>

            <div className="relative h-20 bg-black text-white">
                <h2 className="absolute top-3 left-20 h-22 w-120 text-2xl font-semibold">Timer</h2>
                <h6 className="absolute top-11 left-20 h-22 w-120">Personaliza tus tiempos</h6>
                <img class="absolute top-5 left-4 h-10 w-10 " src="Images/timer.svg"></img>
            </div>

            <div className="relative h-20 bg-black text-white">
                <h2 className="absolute top-3 left-20 h-22 w-120 text-2xl font-semibold">Ayuda</h2>
                <h6 className="absolute top-11 left-20 h-22 w-120">Informacion que te puede ser util</h6>
                <img class="absolute top-5 left-4 h-10 w-10" src="Images/info.png"></img>
            </div>

            <div className="relative h-20 bg-black text-white">
                <h2 className="absolute top-3 left-20 h-22 w-120 text-2xl font-semibold">Cerrar Sesion</h2>
                <h6 className="absolute top-11 left-20 h-22 w-120">Salir de tu cuenta</h6>
                <img class="absolute top-5 left-4 h-10 w-10" src="Images/Sign_out.png"></img>
            </div>
        </>
    )
}