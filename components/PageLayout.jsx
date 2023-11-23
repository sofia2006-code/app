import Head from 'next/head'
import "bootstrap/dist/css/bootstrap.css"
import Providers from './Providers';
import ProviderWrapper from './ProviderWrapper'

export default function PageLayout({ children, title = 'TafocusApp' }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="The best app tp focus on class" />
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Quattrocento+Sans:wght@400;700&display=swap" rel="stylesheet"/> 
            </Head>

            <body>
                <ProviderWrapper>
                    {children}
                </ProviderWrapper>
            </body>
        </>
    )
}