import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Navigations from '../components/navigations'
import Timer from '../components/timer'
import styles from '../styles/Home.module.css'

//import styles from '../styles/globals.css'

export default function Home() {
  const [pomodoro, setPomodoro] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(40);
  const[seconds, setSeconds] = useState(0);
  const[stage, setStage] = useState(0);
  const [ticking, setTicking] = useState(false);

  const switchStage = (index) =>{
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
  const clockTicking =()=>{
    const minutes =getTickingTime();
    const setMinutes = updateminute();

    if (minutes === 0 && seconds === 0){
      alert("Time up")
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
    const timer = setInterval(() => {
      if(ticking){
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
      </div>
    </div>
  )
}