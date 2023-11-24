import react from 'react';

export default function calendar(){
  return(
      <>
    <form>
    <iframe 
      src="https://calendar.google.com/calendar/embed?src=ef2c35a755c74bc58ae9497144cc632b168b736ebc07b1aa4135eef169ded1e1%40group.calendar.google.com&ctz=America%2FArgentina%2FBuenos_Aires" 
      style={{"border:solid 1px #777" : "width=1300" + "height=768" + "frameborder=0" + "scrolling=no"}}>
    </iframe>
      
    </form>
    </>

  );

}
