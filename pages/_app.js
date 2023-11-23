import PageLayout from '../components/PageLayout'
import '../styles/globals.css'
import React from 'react'
import { SessionProvider } from "next-auth/react"
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
//import '../Firebase/firebase.js'
 import useFirebase from '../Firebase/firebase.js'
 import requestForToken from '../Firebase/firebase.js'
//import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
})
/*
{
  React.useEffect(()=>{
    const msg=firebase.messaging();
    msg.requestPermission(). then(()=>{
      return msg.getToken();
    }).then((data)=>{
      console.warn("token", data)
    })
  })
  */ {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
    //<PageLayout />
  )
}


/*
const Notification = () => {
  requestForToken();
  //....
}
*/


/*
function sendSubscriptionToBackEnd(subscription) {
  return fetch('/api/save-subscription/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(subscription),
  })
    .then(function (response) {
      if (!response.ok) {
        throw new Error('Bad status code from server.');
      }

      return response.json();
    })
    .then(function (responseData) {
      if (!(responseData.data && responseData.data.success)) {
        throw new Error('Bad response from server.');
      }
    });
}
*/


