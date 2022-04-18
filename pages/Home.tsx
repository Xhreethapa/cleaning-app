import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import {FcCallback, FcGoogle }from 'react-icons/fc'
import {BsStarFill , BsStarHalf} from 'react-icons/bs'

const Home = () => {
  return (
    <Box  pt='10' backgroundColor='#5C4CB1' h={{ base:'100vh' , sm:'600px', md:'500px'}}>
         <Box   display='flex ' alignItems='center' justifyContent='center' cursor='pointer' textDecoration='none' >
               <h1 style={{fontWeight: 'bold', fontSize:'larger'}}> <span style={{color:"white"}}>Elite</span>Cleaning</h1>
               
            </Box>

            <Box my='20' px='10'> 
                <h1 style={{display:'flex', fontSize:'23px', justifyContent:'center', fontWeight:'bold' ,color:'white' ,marginBottom:'15px'}}> Best End of Lease Clenaing in the city</h1>
                <h2 style={{display:'flex', fontSize:'18px',justifyContent:'center',fontWeight:'bold' ,color:'white'}}>Book your CLeaning Service today.</h2>
                <p style={{display:'flex', fontSize:'15px',justifyContent:'center', fontWeight:'bold' ,color:'white', marginTop:'10px'}}> Book us for lease Cleaning, we are just few clicks away.</p>
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
          <FcCallback onClick={() => window.open("tel:+61426173439")}fontSize='35'/>
          </Box>
           


    </Box>
  )
}

export default Home