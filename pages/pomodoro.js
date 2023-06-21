import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Navigations from '../components/navigations'
import Timer from '../components/timer'
import styles from '../styles/Home.module.css'

//import styles from '../styles/globals.css'

export default function Home() {
  const [pomodoro, setPomodoro] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(40);

  const[stage, setStage] = useState(0)

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
  }
  return (
    <div className="bg-gray-900 min-h-screen font-inter">
      <div className="max-w-2xl min-h-screen mx-auto">
        <Navigations/>
        <Timer stage={stage} switchStage={switchStage} getTickingTime={getTickingTime}/>
      </div>
    </div>
  )
}