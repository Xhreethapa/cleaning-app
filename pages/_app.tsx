import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import {SessionProvider} from "next-auth/react"
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }:AppProps) {

     return (
          <SessionProvider session={pageProps.session}>

               <ChakraProvider>
                    <Component {...pageProps} />

               </ChakraProvider>
          </SessionProvider>
     )

}

export default MyApp
 