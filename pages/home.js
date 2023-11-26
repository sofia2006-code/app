"use client";
import React, { useState, useEffect } from "react";
import Footer from "../components/footer";
import { RxCrossCircled } from "react-icons/rx";
import { signIn, signOut, useSession } from 'next-auth/react';
import {Image} from 'next/image';
import NavBar from "../components/NavBar";

export default function Home() {
  const [tasksArray, setTasksArray] = useState([]);
  const { data: session } = useSession()


  useEffect(() => {
    fetch('http://localhost:3000/api/toDoList', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.json())
    .then((task) => {
      if (task && task.tareas && Array.isArray(task.tareas)) {
        const updatedTasksArray = task.tareas.map((taskObj) => ({
          class: taskObj.clase,
          task: taskObj.tarea,
          date: taskObj.fecha,
        }));

        setTasksArray(updatedTasksArray);
      } else {
        console.log("The 'tareas' property is not in the expected format.");
      }
    })
    .catch((error) => {
      console.log("Error fetching tasks:", error);
    });
  }, []);

  const handleDelete = async (classType, taskText) => {
        
    };

  return (
    <>
    <div>
        <NavBar></NavBar>
    </div>

    <div className="bg-gradient-to-b from-[#1D1261] to-[#1B153F] min-h-screen flex flex-col justify-center items-center">
      {tasksArray.map((taskObj, index) => (
        <div className="bg-white rounded-xl p-4 my-2 flex items-center" key={index}>
          <div className="text-orange-700 font-bold">{taskObj.class}</div>
          <div className="text-slate-600">{taskObj.date}</div>
          <div className="text-slate-800 font-bold font-Quattrocento text-2xl ml-4">{taskObj.task}</div>
        </div>
      ))}
      <Footer />
    </div>
    
    </>
    
  );
}
