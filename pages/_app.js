import PageLayout from '../components/PageLayout'
import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) 

{
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>    
    //<PageLayout />
  )
}