import Head from 'next/head'
import Image from 'next/image'
import Navigations from '../components/navigations'
import {  FcGoogle } from "react-icons/fc";
import { BsFillLockFill } from "react-icons/bs"
// import Woman from "../imagenes/woman.jpg"
export default function Home() {
  return (

    <div className="bg-[#1B153F]  min-h-screen min-w-screen flex flex-col  items-center">
      <Navigations openConf={false}/>
      <h1 className ="font-medium text-5xl px-8 py-10 text-white"> Ingresá a tu cuenta </h1>
      <button className="r my-8 px-10 py-2 text-lg rounded-md bg-gray-400 bg-opacity-30 text-stone-200  flex items-center
      font-normal"> <FcGoogle className='mr-2'/>Ingresa con Google</button> 
      <button className=" px-7 py-2 text-lg rounded-md bg-gray-400 bg-opacity-30 text-stone-200 flex items-center
      font-normal"> <BsFillLockFill className="mr-2"/>Ingresa con contraseña</button> 
      <div className="flex items-center w-full mt-10">
        <hr className="flex-grow border-t border-gray-400" />
        <span className="mx-4 text-white font-semibold text-xl">o</span>
        <hr className="flex-grow border-t border-gray-400" />
      </div>
      <button className="mt-14 px-[80px] py-3 text-lg rounded-full bg-[#DF6B00] text-white font-mormal">
            Crear cuenta      
      </button>
      {/* <div className="absolute bottom-0 right-0">
        <img src={Woman} alt="Background" />
      </div> */}
    </div>
    
  )
}
