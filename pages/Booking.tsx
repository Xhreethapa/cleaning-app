import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Book from './Components/Book'

const Booking = () => {
  return (
    <Box backgroundColor=' #5C4CB1' >
        <Heading display='flex' justifyContent='center' color='white' py='15px'>ELite Cleaning</Heading>
        <Box backgroundColor=' white' borderRadius='12px 12px 0px 0px' border='none' px='15px' py='10'>
            <Heading>Please select the required service</Heading>
            <Flex justifyContent='space-between' >
                <Box>
                    <Box backgroundColor='#DFDEFE' borderRadius='9px'>
                        <Image  height='100px' width='150px' src='/carpet.png'/>
                    </Box>
                    <Box my='15px'>
                        <Text>End of Lease Cleaning</Text>

                    </Box>
                    <Box display='flex' justifyContent='center'>
                        <Box borderRadius='50' height='10px' width='10px' border='1px solid black'>

                        </Box>
                        

                    </Box>
                </Box>
                <Box>
                    <Box backgroundColor='#DFDEFE' borderRadius='9px'>
                    <Image  height='100px' width='150px' src='/carpet.png'/>


                    </Box>
                    <Box my='15px'>
                        <Text>Carpet Cleaning</Text>

                    </Box>
                    <Box display='flex' justifyContent='center'>
                    <Box borderRadius='50' height='10px' width='10px' border='1px solid black'></Box>


                    </Box>
                </Box>

            </Flex>
            <Box>
                <Book/>

            </Box>
        </Box>

    </Box>
  )
}

export default Booking