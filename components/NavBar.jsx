"use client";
import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import {Image} from 'next/image';

export default function LoginBtn() {
    const { data: session } = useSession();

    return(
        <>
            <div>
                <h2 className="absolute font-semibold top-24 mt-2 text-white  left-20 h-12 w-120">{session?.user?.name || 'Nombre de Usuario'}</h2>
                <img class="rounded-3xl absolute top-24  left-4 h-10 w-10" src={session?.user?.image}></img>
                <button onClick={() => signOut()}>Sign out</button>
            </div>
          
        </>
    )

}