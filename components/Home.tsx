import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import {FcCallback, FcGoogle }from 'react-icons/fc'
import {BsStarFill , BsStarHalf} from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'

const Home = () => {
  return (
    <Box  pt='10' backgroundColor='#5C4CB1'  bgGradient='linear(to-l, gray.300, #5C4CB1)' h={{ base:'100vh' , sm:'600px', md:'500px'}}>
         <Box   display='flex ' alignItems='center' justifyContent='center' cursor='pointer' textDecoration='none' >
               <h1 style={{fontWeight: 'bold', fontSize:'larger'}}> <span style={{color:"white"}}>Elite</span>Cleaning</h1>
               
            </Box>
          <Box position="absolute" top="10" left="5" color="gray.100" fontSize={32}>
            <GiHamburgerMenu cursor="pointer"/>
          </Box>

            <Box my='20' px={5} textAlign="left" color="blue.50"> 
            <Heading fontSize="25" mb={3}>Best End of Lease Cleaning in Sydney</Heading>
            <Text color="yellow.300" fontSize="12">starting from $199*</Text>
                <h2 style={{display:'flex', fontSize:'18px',justifyContent:'left',fontWeight:'bold' ,color:'white'}}>Book your Cleaning Service today.</h2>
              <Text pt={2} fontSize={15}>We Provide all kinds of cleaning services specializing mainly in Bond Cleaning.</Text>
              </Box>
            <Flex justifyContent='center' >
                <Image h='260px' width='220px' src='/cleaning.png'/>
            </Flex>
            <Box  display='flex' justifyContent='center'  alignItems='center'> 
            <Box border='none' backgroundColor='white' borderRadius='11px' height='70px'  display='flex' justifyContent='space-evenly' alignItems='center' px='5px'> 
            <Flex>
                <FcGoogle fontSize='60'/>
            </Flex>
            <Box>
                <Box>Google Rating</Box>
                <Flex alignItems='center'>4.5 <BsStarFill color='FFBF67'/> <BsStarFill color='FFBF67'/> <BsStarFill color='FFBF67'/> <BsStarFill color='FFBF67'/> <BsStarHalf color='FFBF67'/></Flex>

            </Box>

            </Box>
          

            </Box>
          <Box position="fixed" top='30px' right='30px' width='65px' height='65px' borderRadius='50px' backgroundColor='#FFBF67' alignItems='center' display='flex' justifyContent='center'  zIndex='200'>
         aaa<FcCallback onClick={() => window.open("tel:+61452603439")}fontSize='35'/>
          </Box>
           


    </Box>
  )
}

export default Home
