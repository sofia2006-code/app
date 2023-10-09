/*import { createClient } from "@supabase/supabase-js";
import React from "react";
import App from './_app'
import { ReactDOM } from "react-dom/client";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'


const supabase = createClient(
    "https://khozifzlshkpjjgccikh.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtob3ppZnpsc2hrcGpqZ2NjaWtoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU2ODQzNDMsImV4cCI6MjAxMTI2MDM0M30.UL18BmXV24hSbQfGAF-igCJX1FCiwMsJw1R9oAhG9xE"
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <SessionContextProvider supabaseClient={supabase}>
            <App/>
        </SessionContextProvider>
    </React.StrictMode>
)
export default function calendar(){
    const session = useSession();
    const supabase = useSupabaseClient();
  
    async function googleSignIn() {
      const {error} = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          scopes: 'https://www.googleapis.com/auth/calendar'
        }
      });
      if(error) {
        alert("Error login in to google provider with supabase");
        console.log(error);
      }
    }

    async function signOut() {
      await supabase.auth.signOut
    }
  
    console.log(session);


}

return(
    <div>
        <div class = "w-400px m-30">
        {session ?
        <>
          <h2> Hey there {session.user.email}</h2>
          <button onClick={() => signOut()}>Sign Out</button>

        </>
        :
        <>
          <button onClick={() => googleSignIn()}>Sign in with Google</button>
        </>
        }
      </div>
    </div>
      
     
)*/