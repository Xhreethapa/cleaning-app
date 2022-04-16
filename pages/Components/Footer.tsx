import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
<Box backgroundColor='#5C4CB1'>
    <Flex>
    <Box>
    <Box   display='flex ' alignItems='center' justifyContent='center' cursor='pointer' textDecoration='none' >
               <h1 style={{fontWeight: 'bold', fontSize:'larger'}}> <span style={{color:"white"}}>Elite</span>Cleaning</h1>
               
     </Box>
     <Box>
         <Box>facebook</Box>
         <Box>Youtube</Box>
     </Box>

    </Box>
   
     <Box color='white'>
         <Text>Services</Text>
         <Text>End of Lease Cleaning</Text>
         <Text>Vacate Cleaning</Text>
         <Text>Move In/Out Cleaning</Text>
         <Text>Carpet Steam Cleaning Cleaning</Text>

     </Box>
     <Box>
         <Text>Privacy Policy</Text>
         <Text>Terms of Service</Text>
     </Box>

    </Flex>
    <Box>
        <Text>(c) Copyright 2021 by Elite Cleaning Services. All rights reserved.</Text>

    </Box>

</Box>
  )
}

export default Footer