import { Box, InputGroup, InputLeftAddon, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Input } from '@chakra-ui/react'

const Book = () => {
  return (
    <Box >
        <Box>
            <Text fontWeight="bold" fontSize='large'>Steep 1  Contact Information</Text>
            <p>This information will be used to contaact you about your service.</p>

        </Box>
        <Box pt='15px'>
        <Stack spacing={3}>
           <Input variant='outline' placeholder='First Name' />
           <Input variant='outline' placeholder='Last Name' />
           <Input variant='outline' placeholder='Email@email' />
           <InputGroup>
            <InputLeftAddon children='+61' />
             <Input type='tel' placeholder='phone number' />
             </InputGroup>


       </Stack>

        </Box>
        <Box my='15px'>
        <Text fontWeight="bold" fontSize='large'>Steep 2  Where would you like us to clean?</Text>

        </Box>
        <Box>
        <Stack spacing={3}>
           <Input variant='outline' placeholder='Street Address' />
           <Input variant='outline' placeholder='Apprt/Unit' />
           <Input variant='outline' placeholder='Suburb' />
           <Input variant='outline' placeholder='State' />
           <Input variant='outline' placeholder='Post-code' />


           </Stack>

        </Box>
        <Box>
        <Text fontWeight="bold" fontSize='large'>Steep 3  Please tell us about your Property</Text>
        </Box>
        <Box>
            
        </Box>
    </Box>
  )
}

export default Book