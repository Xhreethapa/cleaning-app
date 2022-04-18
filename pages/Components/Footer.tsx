import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import {FaFacebookSquare, FaInstagram, FaYoutube }from 'react-icons/fa'

const Footer = () => {
  return (
<Box backgroundColor='#5C4CB1' py='10' >
    <Flex flexDirection='column'>
    <Box  px='5' py='5' color='gray.400'>
         <Text fontSize='larger' fontWeight='bold'>Services</Text>
         <Text>End of Lease Cleaning</Text>
         <Text>Vacate Cleaning</Text>
         <Text>Move In/Out Cleaning</Text>
         <Text>Carpet Steam Cleaning Cleaning</Text>

     </Box>
     <Box borderBottom='1.5px solid #DFDEFE'></Box>
     <Flex px='5' py='2.5' justifyContent='space-between' alignItems='center'fontSize='larger'>
         <Box color='gray.400'>Follow us on </Box>
         <Flex ><FaFacebookSquare/> <FaInstagram/> <FaYoutube/> </Flex>
     </Flex>
     <Box borderBottom='1.5px solid #DFDEFE'></Box>


    
    <Box  px='5' my='10'  cursor='pointer' textDecoration='none' >
               <h1 style={{fontWeight: 'bold', fontSize:'larger'}}> <span style={{color:"white"}}>Elite</span>Cleaning</h1>
               
     </Box>
     
     <Box py='10' px='5' color='gray.400'>
        <Text  py='5'>(c) Copyright 2021 by Elite Cleaning Services. All rights reserved.</Text>
        <Text >All rights reserved. Terms and conditions, features, support, pricing, and service options subject to change without notice.</Text>
        <Text>By accessing and using this page you agree to the Terms and Conditions</Text>

    </Box>
    
   <Flex alignItems='center'color='gray.400'>
       <Box px='5' borderRight='1.5px solid #DFDEDE' >Legal</Box><Box px='5' borderRight='1.5px solid #DFDEDE'>Privacy</Box><Box  px='5'>Security</Box>
   </Flex>
    </Flex>
   

</Box>
  )
}

export default Footer