import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { BsTools } from 'react-icons/bs'
import {GrMapLocation } from 'react-icons/gr'
import { MdOutlineRequestQuote} from 'react-icons/md'

const Whyus = () => {
  return (
    <Box backgroundColor='whitesmoke' py='10px' px='10px' display='flex' flexDirection='column' alignItems='center'>
        <Text fontSize='16' fontWeight='bold' >Why choose Elite Cleaning?</Text>
        <Flex flexDirection='column' alignItems='center' mt='10px'>
        <Box width='70px' height='70px' borderRadius='50' backgroundColor='#DFDEFF' display='flex' alignItems='center' justifyContent='center'><BsTools fontSize='30' fontWeight='bold'/></Box>

            <Text fontSize='18' color='#5C4DB1' fontWeight='bolder'>Professional Service</Text>
            <Text>You can enjoy your precious time doing whatever you want to do while professionals are taking care of cleaning for you.</Text>
        </Flex>

        <Flex flexDirection='column' alignItems='center' mt='10px'>
        <Box width='70px' height='70px' borderRadius='50' backgroundColor='#DFDEFF' display='flex' alignItems='center' justifyContent='center'><GrMapLocation fontSize='30' fontWeight='bold'/></Box>

            <Text fontSize='18' color='#5C4DB1' fontWeight='bolder'>Availability accross Sydney</Text>
            <Text>You can enjoy your precious time doing whatever you want to do while professionals are taking care of cleaning for you.</Text>
        </Flex>

        <Flex flexDirection='column' alignItems='center' mt='10px'>
        <Box width='70px' height='70px' borderRadius='50' backgroundColor='#DFDEFF' display='flex' alignItems='center' justifyContent='center'><MdOutlineRequestQuote fontSize='30' fontWeight='bold'/></Box>

            <Text fontSize='18' color='#5C4DB1' fontWeight='bolder'>Instant Quote</Text>
            <Text>You can enjoy your precious time doing whatever you want to do while professionals are taking care of cleaning for you.</Text>
        </Flex>


    </Box>
  )
}

export default Whyus