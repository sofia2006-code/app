import react from 'react';
import Navigations from '../components/navigations';

export default function calendar(){
  return(
      <>
    <form>
      <div className='bg-gradient-to-b from-[#1D1261] to-[#1B153F] min-h-screen flex flex-col items-center'>
      <Navigations openConf={true}/>
      <div className='mt-14'>
      <iframe 
        src="https://calendar.google.com/calendar/embed?src=ef2c35a755c74bc58ae9497144cc632b168b736ebc07b1aa4135eef169ded1e1%40group.calendar.google.com&ctz=America%2FArgentina%2FBuenos_Aires" 
        // style={{"border:solid 1px #777" : "width=1300" + "height=768" + "frameborder=0" + "scrolling=no"}}>
        style={{"border:solid 1px #777" : "width=1900" + "height=800" + "frameborder=0" + "scrolling=yes"}}>
        
      </iframe>
      </div>
      </div>
    </form>
    </>

  );

}
