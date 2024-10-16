import dynamic from 'next/dynamic'
import { NextIntlProvider } from 'next-intl'
import { ChakraProvider } from "@chakra-ui/react"

import '@/styles/globals.css'
import '@/styles/player.scss'
const PlayerWithNoSSR = dynamic(() => import('@/components/AudioPlayer'), {
  ssr: false,
})




export default function App({ Component, pageProps, router }) {

  return (

    <NextIntlProvider messages={pageProps.messages}>

      <ChakraProvider>
        <PlayerWithNoSSR />


        <Component {...pageProps} />


      </ChakraProvider>
    </NextIntlProvider>


  )
}
