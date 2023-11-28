import react from 'react';
import Navigations from '../components/navigations';
import Footer from '../components/footer';


export default function calendar(){
  return(
      <>
    <form>
      <div className=' text-gray-100 bg-gradient-to-b from-[#1D1261] to-[#1B153F] min-h-screen flex flex-col items-center'>
      <Navigations openConf={true}/>
      <h1 className='text-2xl text-center  font-bold'>Calendario</h1>
        <p className="text-lg text-center mx-8 px-3 my-2 font-semibold">Gestiona tus tareas aqui</p>

      <div className='mt-2'>
        
        <iframe 
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FArgentina%2FBuenos_Aires&showPrint=0&showDate=1&showNav=1&showTabs=0&showTitle=0&showCalendars=1&showTz=0"
          // style={{"border:solid 1px #777" : "width=1300" + "height=768" + "frameborder=0" + "scrolling=no"}}>
          style={{border: "0" , width:"100%", height:"520px", frameborder:"0", scrolling:"no"}}>
          
        </iframe>
      </div>
      <Footer/>
      </div>
    </form>
    </>

  );

}
