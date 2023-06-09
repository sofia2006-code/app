import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import Navigations from '../components/navigations'
import Timer from '../components/timer'
import styles from '../styles/Home.module.css'
import Alarm from '../components/alarm'

//import styles from '../styles/globals.css'

export default function Home() {
  const [pomodoro, setPomodoro] = useState(25);
  const [shortBreak, setShortBreak] = useState(1);
  const [longBreak, setLongBreak] = useState(40);
  const[seconds, setSeconds] = useState(0);
  const[stage, setStage] = useState(0);
  const [consumedSecond, setConsumeSec] = useState(0)
  const [ticking, setTicking] = useState(false);

  const alarmRef = useRef();

  //cambia de estado cuando se consumen los segundos 
  const switchStage = (index) =>{
    const isYes = consumedSecond && stage !== index 
      // ? confirm("Cambiar de estado")
      // : false;
    if(isYes){
      reset();
      setStage(index);
    }
    else if(!consumedSecond) {
      setStage(index);
    }
    setStage(index);
  }

  const getTickingTime = ()=> {
    const timeStage ={
      0: pomodoro,
      1: shortBreak,
      2: longBreak,
    }

     return timeStage[stage]; 
  };

  const updateminute =() =>{
    const updateStage ={
      0: setPomodoro,
      1: setShortBreak,
      2: setLongBreak,
    }

    return updateStage[stage];
  }

  // setea todos los valores a su valor original
  const reset =() =>{
    setTicking(false);
    setPomodoro(25);
    setLongBreak(10);
    setShortBreak(1);
    setSeconds(0);
  }
  
  //cuando hay que resetear le da play a la alarma
  const timeUp = () =>{
    reset();
    setIsTimeUp(true);
    alarmRef.current.play
  }
  const clockTicking =()=>{
    const minutes =getTickingTime();
    const setMinutes = updateminute();

    // TIME UP
    if (minutes === 0 && seconds === 0){
      reset();
    }
    else if (seconds ===0){
      setMinutes((minute) => minute -1); 
      setSeconds(59); 
    }
    else{
      setSeconds((second) => second - 1);
    }
  }
  useEffect(() =>{

    window.onbeforeunload = () =>{
      return consumedSecond ? "Show waring" : null;
    };
    const timer = setInterval(() => {
      if(ticking){
        setConsumeSec(value => value + 1)
        clockTicking();
      }
    }, 1000)

    return()=>{
      clearInterval(timer);
    }

  }, [seconds, pomodoro, shortBreak, longBreak, ticking]);

  return (
    <div className="bg-gray-900 min-h-screen font-inter">
      <div className="max-w-2xl min-h-screen mx-auto">
        <Navigations/>
        <Timer stage={stage}
         switchStage={switchStage} 
         getTickingTime={getTickingTime}
         seconds={seconds}
         ticking={ticking}
         setTicking={setTicking}/>
         <Alarm ref={alarmRef}/>
      </div>
    </div>
  )
}