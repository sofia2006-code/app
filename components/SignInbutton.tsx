"use client";
import react from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'

const SignInbutton = () => {
    const {data:session} = useSession();

    if(session && session.user){
        return (
            <div className="flex gap-4 ml-auto">
                <p className="text-sky-600">{session.user.name}</p>
                <button onClick={() => signOut()} className="text-red-600">
                    Sign Out
                </button>

            </div>
        )
    }
    return (
        <div onClick={() => signIn()} className="text-green-600 ml-auto">
            Sign In
        </div>
    )
}

export default SignInbutton