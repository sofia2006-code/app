import React from 'react';
import { FaCalendar, FaClock, FaTasks, FaHome } from 'react-icons/fa'; 
import { FiHome } from "react-icons/fi";
import { LuCalendarRange } from "react-icons/lu";
import { signIn, signOut, useSession } from 'next-auth/react';



const Footer = () => {

  const { data: session } = useSession()

    const handlerredirectcalendar = () =>{
        window.location.href="http://localhost:3000/calendar"
    }

    const handlerredirectTimer = () =>{
        window.location.href="http://localhost:3000/pomodoro"
    }

    const handlerRedirecttasks = () =>{
      window.location.href="http://localhost:3000/tasks"
    }

    const handlerRedirectHome = () =>{
      window.location.href="http://localhost:3000/home"
    }


  return (
    <div className="fixed bottom-0 left-0 w-full bg-transparent p-4 flex justify-around items-center text-[#B9B5B5]">
      <div className="footer-item flex flex-col items-center">
        <button onClick={handlerredirectcalendar}>
          <LuCalendarRange size={24} />
        </button>
        <p className="text-sm">Calendario</p>
      </div>
      <div className="footer-item flex flex-col items-center">
        <button onClick={handlerredirectTimer}>
          <FaClock size={24} />
        </button>
        <p className="text-sm">Timer</p>
      </div>
      <button className="bg-[#2200FF] text-white rounded-full pb-2.5 px-3 pt-1">
        <span className="text-4xl">+</span>
      </button>
      <div className="footer-item flex flex-col items-center">
        <button onClick={handlerRedirecttasks}>
          <FaTasks size={24} />
        </button>
        <p className="text-sm">Tareas</p>
      </div>
      <div className="footer-item flex flex-col items-center">
        <button onClick={handlerRedirectHome}>
          <FiHome size={24} />
        </button>
        <p className="text-sm">Home</p>
      </div>
    </div>
  );
};

export default Footer;
