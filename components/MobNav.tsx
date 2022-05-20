import {  Box, Flex } from '@chakra-ui/react'
import React from 'react'
import {ArrowRightIcon} from '@chakra-ui/icons'


const MobNav = () => {
  return (
    <Flex  height="70px" px='5' backgroundColor='white'> 
       
        <Flex justifyContent='space-evenly' width='100%' alignItems='center' color='blue.800'>
            <Box fontWeight='bold' fontSize='17' cursor='pointer'>Our Services</Box>
            <Box fontWeight='bold' fontSize='17'cursor='pointer'>Blog</Box>
            <Box fontWeight='bold' fontSize='17' cursor='pointer'>Booking</Box>
            <Box fontWeight='bold' fontSize='17' cursor='pointer'>About Us</Box>
        </Flex>
    </Flex>

  )
}

export default MobNav