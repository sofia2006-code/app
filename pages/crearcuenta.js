import Head from 'next/head'
import Image from 'next/image'
import Navigations from '../components/navigations'
import {  FiMail } from "react-icons/fi";
import { BsFillLockFill } from "react-icons/bs"
import { AiOutlineEyeInvisible } from "react-icons/ai"
import {  FcGoogle } from "react-icons/fc";
import { FiUser } from "react-icons/fi"

// import Woman from "../imagenes/woman.jpg"

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#1D1261] to-[#1B153F] min-h-screen flex flex-col justify-start items-center pb-10">
  <Navigations openConf={false} />
  <h1 className="font-medium text-5xl px-8 pt-7 pb-3 text-white">Crea tu cuenta</h1>
  <div className="flex flex-col justify-start items-start">
    <div className=" flex align-items-center  my-10 shadow-inner appearance-none border-none rounded w-full py-2 px-3 bg-gray-400 bg-opacity-30 text-gray-200 leading-tight focus:outline-none focus:shadow-outline">
      <FiUser className="text-stone-100 text-sm"/>
      <input className="bg-transparent ml-2" id="username" type="text" placeholder="Username" />
    </div>
    <div className=" flex align-items-centershadow-inner appearance-none border-none rounded w-full py-2 px-3 bg-gray-400 bg-opacity-30 text-gray-200 mb-4 leading-tight focus:outline-none focus:shadow-outline">
      <BsFillLockFill className="text-stone-100 text-sm"/>
      <input className="bg-transparent ml-2"id="password" type="password" placeholder="******************" />
    </div>
  </div>
  <div className="mt-4 flex items-center text-[#DF6B00]">
    {/* ocultar y hacer un div */}
    <input type="checkbox" className=" bg-transparent h-4 w-4 rounded-md border-[#DF6B00] focus:ring-0 focus:shadow-none" />
    <span className="ml-2 text-white">Permanecer logueado</span>
  </div>
  <button className="mt-6 px-10 py-3 text-lg font-semibold rounded-full bg-[#DF6B00] text-white">
    Crear cuenta
  </button>
  <div className="flex items-center w-full mt-6">
    <hr className="flex-grow border-t border-gray-400" />
    <span className="mx-2 text-white font-semibold text-xl">o</span>
    <hr className="flex-grow border-t border-gray-400" />
  </div>
  <button className="r my-8 px-10 py-2 text-lg rounded-lg bg-gray-400 bg-opacity-30 text-stone-200  flex items-center
      font-normal shadow-inner"> <FcGoogle className='mr-2'/>Crear con Google</button> 
  <div className=" bottom-0 left-0">
        <img src="/imagenes/womansitting.png" alt=""   />
      </div>
</div>
  

  )
}
