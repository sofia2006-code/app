import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';


export default function index(){
    return(
        <div className="bg-gradient-to-b from-[#1D1261] to-[#1B153F] min-h-screen flex flex-col justify-start items-center">
            <div className="px-8 pt-14 mt-12 pb-3">
                <img src="/imagenes/COFOCUS.png" alt=""/>
            </div>
            {/* <div className=" flex justify-items-end "> */}
            <div className="qcy pt-10">
                <img src="/imagenes/logoindex.png" alt="" />
            </div>
            <div className="qsy2">
                <img src="/imagenes/textindex.png" alt="" />
            </div>
            <a href='/login' className="mt-12 px-10 py-3 text-xl font-semibold rounded-full bg-[#DF6B00] text-white">
            Empezar
            </a>
        </div>
    )
}