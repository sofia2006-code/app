import react from 'react';
import Navigations from '../components/navigations';
import style from '../Styles/calendario.module.css';


export default function calendar(){
  return(
      <>
    <form>
      <div className='bg-gradient-to-b from-[#1D1261] to-[#1B153F] min-h-screen flex flex-col items-center'>
      <Navigations openConf={true}/>
      <div className='mt-14'>
      <iframe 
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FArgentina%2FBuenos_Aires&showPrint=0&showDate=1&showNav=1&showTabs=0&showTitle=0&showCalendars=1&showTz=0"
        // style={{"border:solid 1px #777" : "width=1300" + "height=768" + "frameborder=0" + "scrolling=no"}}>
        style={{border: "0" , width:"100%", height:"600px", frameborder:"0", scrolling:"no"}}>
        
      </iframe>
      </div>
      </div>
    </form>
    </>

  );

}
