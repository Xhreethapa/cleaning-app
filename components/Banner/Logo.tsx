import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Logo = () => {
  return (
    <Flex position="relative">
        <Box position="relative" w='70px' top={-1}>
        <Box  position="absolute"left="6" top={6} h={12} w={12} rounded="full" backgroundColor="#BFD4E9"></Box>

          <Box zIndex="2" position="absolute" left={2} h={10} w={10} rounded="full" backgroundColor="#063668"></Box>
          <Box zIndex={999} position="absolute" right="2" top="-1" h={6} w={6} rounded="full" backgroundColor="#DD1515"></Box>

        </Box>
        <Heading color="blue.800">Elite <Text pl={4} fontSize={15}>Cleaning</Text></Heading>

    </Flex>
  )
}

export default Logo