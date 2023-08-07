import Head from 'next/head'
import Image from 'next/image'
import Navigations from '../components/navigations'
import {  FiMail } from "react-icons/fi";
import { BsFillLockFill } from "react-icons/bs"
import { AiOutlineEyeInvisible } from "react-icons/ai"
// import Woman from "../imagenes/woman.jpg"

export default function Home() {
  return (

    <div className="bg-gradient-to-r from-[#1B153F] to-[#1B153F]  min-h-screen min-w-screen flex flex-col  items-center">
      <Navigations openConf={false}/>
      <h1 className ="font-medium text-5xl px-8 py-10 text-white"> Crea tu cuenta </h1>
      <button className="r my-8 px-10 py-2 text-lg rounded-md bg-gray-400 bg-opacity-30 text-stone-200  flex text-left
      font-normal"> <FiMail className='mr-2'/>Email</button> 
      <button className=" px-7 py-2 text-lg rounded-md bg-gray-400 bg-opacity-30 text-stone-200 flex text-left
      font-normal"> <BsFillLockFill className="mr-2"/>Contraseña</button> 
      <div>
      <button className="flex  items-center w-8 h-8 border-2 border-[#DF6B00]"/> Permanecer logueado
      </div>
      <button className="mt-14 px-[80px] py-3 text-lg rounded-full bg-[#DF6B00] text-white font-mormal">
            Crear cuenta      
      </button>
      <div className="flex items-center w-full mt-10">
        <hr className="flex-grow border-t border-gray-400" />
        <span className="mx-4 text-white font-semibold text-xl">o</span>
        <hr className="flex-grow border-t border-gray-400" />
      </div>
      {/* <div className="absolute bottom-0 right-0">
        <img src={Woman} alt="Background" />
      </div> */}
    </div>
    
  )
}
