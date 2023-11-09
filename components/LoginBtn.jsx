"use client";
import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

/*const SignInbutton = () => {
    const { data: session } = useSession();

    if (session && session.user) {
        return (
            <div className="flex gap-4 ml-auto">
                <p className="text-sky-600">{session.user.name}</p>
                <button onClick={() => signOut()} className="text-red-600">
                    Sign Out
                </button>
            </div>
        );
    }
    return (
        <div onClick={() => signIn()} className="text-green-600 ml-auto">
            Sign In
        </div>
    );
};

export default SignInbutton;*/

export default function LoginBtn() {
    const { data: session } = useSession()
    if (session) {
      return (
        <>
          <h2 className="text-white text-xl">Signed in as {session.user.email}</h2> <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )
    }
    return (
      <>
        <div className="text-white text-xl" >Not signed in</div> 
        
        <button className="r my-8 px-10 py-2 text-lg rounded-lg bg-gray-400 bg-opacity-30 text-stone-200  flex items-center
      font-normal shadow-inner" onClick={() => signIn()}>Ingresa con Google</button>
      </>
    )
  }
  