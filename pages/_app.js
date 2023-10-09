import PageLayout from '../components/PageLayout'
import '../styles/globals.css'
import React from 'react'
import { SessionProvider } from "next-auth/react"
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import firebase from './api/firebase'
//import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) 

{
  React.useEffect(()=>{
    const msg=firebase.messaging();
    msg.requestPermission(). then(()=>{
      return msg.getToken();
    }).then((data)=>{
      console.warn("token", data)
    })
  })
  
  {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>    
    //<PageLayout />
  )
  }