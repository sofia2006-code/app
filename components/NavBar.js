import Link from 'next/link'


function NavBar() {
    return (
        <div className="bg-amber-800 h-20 ">
            
            <h1 className="absolute top-5 left-20 h-22 w-120 text-2xl font-semibold text-white">Configuracion</h1>
            <img class="absolute right-4 top-6 h-8 w-8" src="Images/Search.png"></img>
            <button href='index'>    
                <img class="absolute top-5 left-4 h-10 w-10" src="Images/Arrow_left.png"></img>
            </button>
            
        </div>
    )
//
}

export default NavBar