import Head from 'next/head'
import Image from 'next/image'
import Navigations from '../components/navigations'
import Timer from '../components/timer'
import styles from '../styles/Home.module.css'
//import styles from '../styles/globals.css'

export default function Home() {
  return (
    <div className="bg-gray-900 min-h-screen font-inter">
      <div className="max-w-2xl min-h-screen mx-auto">
        <Navigations/>
        <Timer/>
      </div>
    </div>
  )
}