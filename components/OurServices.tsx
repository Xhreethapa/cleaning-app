import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import {GiVacuumCleaner} from 'react-icons/gi'

const OurServices = () => {
  return (
   <Box backgroundColor='#DFDEFE' px='15' py={6}>
               <Text textAlign='center' pt={8} color='#5C4CB1' fontWeight='bold' fontSize='larger'> Our Services</Text>
                <Text display='flex' justifyContent='center' py={2} fontSize='14' color="gray.600" alignItems='center'>Check out what services we offer in Sydney</Text>

             <Flex backgroundColor='#5C4CB1' flexDirection="column" color="gray.200" alignItems="center" border="1px solid gray" borderColor="gray.400" p={4} rounded="md" shadow="md">
                <Box fontSize="40"><GiVacuumCleaner/></Box>
                <Heading fontSize="18">End of Lease Cleaning</Heading>
                 <Text textAlign="center" color="gray.200" fontSize="13" mt={2}>We Provide best end of lease cleaning Services in Sydney and areas. lkja sdflkjasdfllj lkasjdfladjf klj </Text>
             </Flex>
            
   </Box>
  )
}

export default OurServices