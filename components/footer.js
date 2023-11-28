import React from 'react';
import { FaCalendar, FaClock, FaTasks, FaHome } from 'react-icons/fa'; 
import { FiHome } from "react-icons/fi";
import { LuCalendarRange } from "react-icons/lu";
import { signIn, signOut, useSession } from 'next-auth/react';

import { Link } from "react-router-dom";



const Footer = ({buttonAppear=false, setFormVisible}) => {

  const { data: session } = useSession()

    const handlerredirectcalendar = () =>{
        window.location.href="https://cofocus.vercel.app/calendar"
    }

    const handlerredirectTimer = () =>{
        window.location.href="https://cofocus.vercel.app/pomodoro";
    }

    const handlerRedirecttasks = () =>{
        window.location.href="https://cofocus.vercel.app/tasks";
    }

    const handlerRedirectHome = () =>{
      window.location.href="https://cofocus.vercel.app/home";
    }

    

  return (
    <div className="position-fixed bottom-0 left-0 w-full  p-4 flex justify-around items-center text-[#B9B5B5] bg-blue-950">
      <div className="footer-item flex flex-col items-center">
        <Link to="/calendar">
          <LuCalendarRange size={24} />
        </Link>
        <p className="text-sm">Calendario</p>
      </div>
      <div className="footer-item flex flex-col items-center">
        <Link to="/pomodoro">
          <FaClock size={24} />
        </Link>
        <p className="text-sm">Timer</p>
      </div>
      {buttonAppear && (
        <button className="bg-[#2200FF] text-white rounded-full pb-2.5 px-3 pt-1"  onClick={() => setFormVisible(true)}>
        <span className="text-4xl">+</span>
        </button>
        )}    
    
      
      <div className="footer-item flex flex-col items-center">
        <Link to="/tasks">
           <FaTasks size={24} />
        </Link>
        <p className="text-sm">Tareas</p>
      </div>
      <div className="footer-item flex flex-col items-center">
        <Link to="/home">
          <FiHome size={24} />
        </Link>
        <p className="text-sm">Home</p>
      </div>
    </div>
  );
};

export default Footer;
