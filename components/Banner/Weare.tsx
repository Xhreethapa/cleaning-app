import { Box, Button, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Weare = () => {
  return (
    <Box mx="auto"  my={4} maxWidth={1000} px={4} pt={40}>
        <Text color="red.400">WE ARE ELITE</Text>
        <Heading color="blue.700" fontSize={25}>Professional End of Lease Cleaning Service for your Home</Heading>
        <Text maxWidth={700} py={4} fontSize={14} lineHeight="1.7" color="gray.500">We Provide all cleaning services all around sydney and suburbs areas in best and reasonable prices. We offer all kinds of cleaning services from End of lease of domestic cleaning as well.</Text>
        <Text fontWeight="light" fontSize={13} color="blue.600">starting from $199*</Text>
        <Button colorScheme="red" mb={10} mt={4} fontSize={14}>Take a Service <ChevronRightIcon ml={1}/></Button>
    </Box>

  )
}

export default Weare