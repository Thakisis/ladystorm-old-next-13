import { useTranslations } from 'next-intl'
import Head from 'next/head'
import Hero from '@/components/Hero'
import Dance from '@/components/Dance'
import Sing from '@/components/Sing'
import Burleska from '@/components/Burleska'
import Swim from '@/components/Swim'
import Offers from '@/components/Offers/Offers'
import PageLayout from '@/layouts/Layout'
import Sunshine from '@/components/Sunshine'
import AboutMe from '@/components/AboutMe'

import { useEffect } from 'react'
export default function Home({ pageProps }) {
  const t = useTranslations('Index')

  return (
    <PageLayout {...pageProps}>

      <main>

        <Hero />
        <Dance />
        <Sing />
        <Burleska />
        <Swim />
        <Sunshine />
        <AboutMe />
        <Offers />
      </main>

    </PageLayout>
  )
}


export async function getStaticProps({ locale }) {

  return {
    props: {
      locale: { locale },
      messages: (await import(`@/messages/${locale}.json`)).default
    }
  }
}
