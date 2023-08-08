import Head from 'next/head'
import Image from 'next/image'
import Navigations from '../components/navigations'
import {  FiMail } from "react-icons/fi";
import { BsFillLockFill } from "react-icons/bs"
import { AiOutlineEyeInvisible } from "react-icons/ai"
// import Woman from "../imagenes/woman.jpg"

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-[#1B153F] to-[#1B153F] min-h-screen flex flex-col justify-start items-start pb-10">
  <Navigations openConf={false} />
  <h1 className="font-medium text-5xl px-8 pt-10 pb-3 text-white">Crea tu cuenta</h1>
  <div className="flex flex-col justify-start items-start">
    <input className="mx-8 my-14 shadow-inner appearance-none border-none rounded w-full py-2 px-3 bg-gray-400 bg-opacity-30 text-gray-200 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
    <input className="mx-8 shadow-inner appearance-none border-none rounded w-full py-2 px-3 bg-gray-400 bg-opacity-30 text-gray-200 mb-4 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
  </div>
  <div className="mt-4 flex items-center text-[#DF6B00]">
    <input type="checkbox" className="h-4 w-4 rounded-md border-[#DF6B00] focus:ring-0 focus:shadow-none" />
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
</div>

  )
}
