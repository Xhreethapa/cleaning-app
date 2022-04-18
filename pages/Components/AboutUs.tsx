import { Box, Flex, Heading, Image, Input, InputGroup, InputLeftAddon, Stack, Text, Textarea } from '@chakra-ui/react'
import React from 'react'

const AboutUs = () => {
  return (
<Box backgroundColor='whitesmoke' >
    <Text color='#5C4CB1' display='flex' justifyContent='center' alignItems='center' fontSize='larger' fontWeight='bold'>About Us</Text>
    <Flex gap={5} flexDirection='column' alignItems='center' fontSize='larger' fontWeight='bold'backgroundImage='./about.jpg' backgroundPosition='center' backgroundSize='cover' height='250px' py='5'>
        <Text>We are here to Help</Text>
        <Text>We know you have better things to do</Text>
    </Flex >
    <Box>
        <Text color='#5C4CB1' display='flex' justifyContent='center' alignItems='center' fontSize='larger' fontWeight='bold' py='10'>Who Are We?</Text>
        <Text px='10' py='5'>
           <span style={{ fontSize:'larger', fontWeight:'bold'}}> Elite Cleaning Company</span> is a domestic and commercial cleaning service provider. we are specialized in End of Lease cleaning / Move-in/Move-out Cleaning. We provide our quality lease cleaning service all accross Sydney.
            We have teams of well experienced and professional cleaners who know what they are doing. our company`s  main objective is to have satisfied customers. we intend to provide the best possible service in best possible price.
            Our End of lease cleaning service comes with  <span style={{ fontSize:'larger', fontWeight:'bold'}}> 72 hours Bond-Back guarantee</span>.
        </Text>
    </Box>
    <Box display={{base:'block', sm:'block', md:'flex'}}>
    <Box  backgroundImage='./sydney.jpg' backgroundPosition='center' backgroundSize='cover'opacity='0.9' flex='1'>
        
        
        <Flex py='10' px='10' backgroundColor='black' opacity='0.6' h='100%' flexDirection='column'  alignItems='center' color='white' justifyContent='space-between'>
             <Text fontWeight='bold' fontSize='larger'>Contact us Today</Text>
             <Text>Please, speak to our customer support advisor and You can ask for a Free Quote and make an appointment on your prefered date, day and time.
             If you need to make changes to your booking, do not hesitate to do so, as long as you give us a sufficient notice in an advance. We are here for you and always ready to help!
 
 
             </Text>
             <Box onClick={() => window.open("tel:+61426173439")} px='10' py='2.5' borderRadius='7px' border='1px solid white'>61426173439</Box>
         </Flex>
        
     </Box>
     <Box px='5' py='5'  display='flex' flexDirection='column' alignItems='center' flex='1'>
       <Heading py='10'>Contact Form</Heading>
       <Text>Please feel free to contact us at anytime. you can Call us or simply fill out the form and we will get back to you in no time.</Text>
       <Box my='10' >
       <Stack spacing={3}>
           <Input variant='outline' placeholder='Full Name' />
           <Input variant='outline' placeholder='Property Address' />
           <Input variant='outline' placeholder='email' />
           <InputGroup>
            <InputLeftAddon children='+61' />
              <Input type='tel' placeholder='phone number' />
            </InputGroup>
            <Textarea placeholder='Please mention a little details about your property (i.e no. of bedrooms, bathrooms, etc)' />
 
 
 
 
 
       </Stack>
       
       </Box>

       <Flex justifyContent='center' marginBottom='5'>
       <Box border='none' borderRadius='9px' px='10' py='2.5' backgroundColor='#5C4CB1' boxShadow='0px 0px 2px 0px gray'>Contact Me</Box>
     </Flex>

     </Box>
     
    </Box>
    
   
</Box>
  )
}

export default AboutUs