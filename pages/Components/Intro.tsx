import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Intro = () => {
  return (
    <Box py={10} px='5' backgroundColor='#DFDEFE'>
      <Box w={{base:"100%", md:"1000px"}} mx="auto">
        <Heading fontSize="20" fontWeight="bold" letterSpacing="1px">Looking for best Lease Cleaning Service in Sydney? Well Look Nomore..</Heading>
        <Box  >
          <Text my={6} color="gray.600" >   We as a top-rated cleaning services provider, do our best to keep your home or office clean and tidy. With our years of experience in the industry, we know what it takes to make your place feel like a home.
            We offer all kinds of cleaning services, from carpet cleaning to the End of the lease, for fellow  Sydneysiders. We’re the best choice for any domestic or commercial property cleaning.<br></br>
          </Text>
          <Text fontWeight='bold' fontSize="18px"> A clean place is a happy place.</Text>



        </Box>
      </Box>

    </Box>
  )
}

export default Intro