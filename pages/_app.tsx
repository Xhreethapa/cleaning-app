import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import {SessionProvider} from "next-auth/react"
import { AppProps } from 'next/app';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {

     return (
          <SessionProvider options={{clientMaxAge: 0}} session={pageProps.session}>

               <ChakraProvider>
                    <Component {...pageProps} />

               </ChakraProvider>
          </SessionProvider>
     )

}

export default MyApp
 