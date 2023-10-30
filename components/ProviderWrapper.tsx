import Head from 'next/head'
import Navbar from './Navbar';
import { SessionProvider } from 'next-auth/react';


export default function ProviderWrapper({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}