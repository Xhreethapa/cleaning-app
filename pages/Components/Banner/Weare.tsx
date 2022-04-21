import { Box, Button, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Weare = () => {
  return (
    <Box mx="auto" px={4} my={4} maxWidth={1200}>
        <Text color="red.400">WE ARE ELITE</Text>
        <Heading color="blue.700" fontSize={25}>Professional End of Lease Cleaning Service for your Home</Heading>
        <Text maxWidth={700} py={4} fontSize={15} color="gray.400">We Provide all cleaning services all around sydney and suburbs areas in best and reasonable prices. We offer all kinds of cleaning services from End of lease of domestic cleaning as well.</Text>
        <Button colorScheme="red" fontSize={14}>Take a Service <ChevronRightIcon ml={1}/></Button>
    </Box>

  )
}

export default Weare