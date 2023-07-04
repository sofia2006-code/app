import Head from 'next/head'
import Navbar from './Navbar';

export default function PageLayout({ children, title = 'TafocusApp' }) {
    return(
        <>
        <Head>
        <title>{title}</title>
        <meta name="description" content="The best app tp focus on class" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
            <Navbar />
        </header>
        <main>
            {children}
        </main> 
    
    </>
    )
}