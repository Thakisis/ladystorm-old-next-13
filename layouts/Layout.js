import { useTranslations } from 'next-intl'
import { Josefin_Sans } from 'next/font/google'
import Head from 'next/head'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { usePleaseStay, AnimationType } from 'react-use-please-stay'

const josefin_Sans = Josefin_Sans({ subsets: ['latin'] })
export default function PageLayout({ children, title }) {
    const t = useTranslations('PageLayout')

    return (
        <>

            <Head>

                <title>LadyStorm Team</title>
                <meta name="description" content="" />


                <meta itemprop="name" content="LadyStorm Team" />
                <meta itemprop="description" content="website" />
                <meta itemprop="image" content="https://ladystorm.cz/Ladystorm.png" />


                <meta property="og:url" content="https://ladystorm.cz" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="LadyStorm Team" />
                <meta property="og:description" content="" />
                <meta property="og:image" content="https://Ladystorm.cz/Ladystorm.png" />


                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="LadyStorm Team" />
                <meta name="twitter:description" content="" />
                <meta name="twitter:image" content="https://Ladystorm.cz/Ladystorm.png" />


            </Head>
            <NavBar />
            <div className={josefin_Sans.className}>


                {children}

            </div>
            <Footer />
        </>
    )
}
