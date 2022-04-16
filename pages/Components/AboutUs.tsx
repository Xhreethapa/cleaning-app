import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const AboutUs = () => {
  return (
<Box backgroundColor='whitesmoke' >
    <Text color='#5C4CB1' display='flex' justifyContent='center' alignItems='center' fontSize='larger' fontWeight='bold'>About Us</Text>
    <Box backgroundImage='./about.jpg' backgroundPosition='center' backgroundSize='cover' height='250px'>
        <Text>We are here to Help</Text>
        <Text>We know you have better things to do</Text>
    </Box>
    <Box>
        <Text color='#5C4CB1' display='flex' justifyContent='center' alignItems='center' fontSize='larger' fontWeight='bold'>Who Are We?</Text>
        <Text px='10'>
           <span style={{ fontSize:'larger', fontWeight:'bold'}}> Elite Cleaning Company</span> is a domestic and commercial cleaning service provider. we are specialized in End of Lease cleaning / Move-in/Move-out Cleaning. We provide our quality lease cleaning service all accross Sydney.
            We have teams of well experienced and professional cleaners who know what they are doing. our company`s  main objective is to have satisfied customers. we intend to provide the best possible service in best possible price.
            Our End of lease cleaning service comes with  <span style={{ fontSize:'larger', fontWeight:'bold'}}> 72 hours Bond-Back guarantee</span>.
        </Text>
    </Box>
    <Box py='10' px='10' backgroundImage='./sydney.jpg' backgroundPosition='center' backgroundSize='cover'opacity='0.8'>
        <Flex flexDirection='column' justifyContent='center' alignItems='center' color='white'>
            <Text fontWeight='bold' fontSize='larger'>Contact us Today</Text>
            <Text>Please, speak to our customer support advisor and You can ask for a Free Quote and make an appointment on your prefered date, day and time.
            If you need to make changes to your booking, do not hesitate to do so, as long as you give us a sufficient notice in an advance. We are here for you and always ready to help!


            </Text>
            <Box onClick={() => window.open("tel:+61426173439")} px='10' py='2.5' borderRadius='7px' border='1px solid white'>61426173439</Box>
        </Flex>
    </Box>
   
</Box>
  )
}

export default AboutUs