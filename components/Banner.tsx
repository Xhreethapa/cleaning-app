import { Box, Button, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import React, { useState } from 'react'
import { FcCallback } from 'react-icons/fc'
import { GiHamburgerMenu } from 'react-icons/gi'
import Logo from './Banner/Logo'
import Weare from './Banner/Weare'
import RequestQuote from './Quote/RequestQuote'

const Banner = () => {
    const [quote, setQuote] = useState<boolean>(false)
    return (
        <Box backgroundColor="white"  >
               <Box maxWidth="1000" mx="auto" >

          <Flex backgroundColor="white"  w={{base:"100%"}} maxWidth="1000" px={4} position="fixed" zIndex="1000"  top="30"  justifyContent="space-between" alignItems="center" py={6} gap={10} >
              <Box color="blue.700" display={{md:"none"}}>
              {/* <GiHamburgerMenu fontSize={24}  cursor="pointer" /> */}

              </Box>
            <Logo/>
            <Flex display={{base:"none", md:"flex"}} mx={10} gap={8} alignItems="center" justifyContent="center" fontWeight="semibold" color="blue.600">
                <Box>Home</Box>
                <Box>About</Box>

                <Box>Service</Box>

                <Box><Link href='/allBlogs'>Blogs</Link> </Box>

                <Box>Contact Us</Box>

            </Flex>

            <Button  outline={{ border:"0px solid white"}} colorScheme="red" onClick={() => setQuote(!quote)} py={{base:'5px', sm:'5px', md:'5'}} fontSize={{base:'13px', sm:'15px',md:'17px'}}>Get a Quote</Button>

            <Flex position="fixed" bottom='15px' right='15px' width='50px' height='50px' borderRadius='50px' backgroundColor='#FFBF67' alignItems='center' display='flex' justifyContent='center'  zIndex='200'>
          <FcCallback onClick={() => window.open("tel:+61452603439")}fontSize='24'/>
          </Flex>
           

          </Flex>
         
          </Box>
          <RequestQuote quote={quote} setQuote={setQuote}/>
        </Box>
    )
}

export default Banner