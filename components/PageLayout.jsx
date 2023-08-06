import Head from 'next/head'
import Navbar from './Navbar';
import Providers from './Providers';
import Appbar from './Appbar'

export default function PageLayout({ children, title = 'TafocusApp' }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="The best app tp focus on class" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header>
                <Providers>
                    <Appbar />
                    {children}
                </Providers>
                <Navbar />
            </header>

            <main>
                {children}
            </main>


        </>
    )
}