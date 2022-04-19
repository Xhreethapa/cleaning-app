import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { BsTools } from 'react-icons/bs'
import { GrLike, GrMapLocation } from 'react-icons/gr'
import { MdOutlineRequestQuote } from 'react-icons/md'

const Whyus = () => {
  return (
    <Box textAlign="left" my={6} backgroundColor='whitesmoke' py='10px' px='10px' display='flex' flexDirection='column' >
      <Text color="red.600">WHY CHOOSE ELITE</Text>
      <Heading color="blue.700" my={2}>Why Choose Our Service Provider</Heading>
      <Flex alignItems="center">
        <Box fontSize="30" rounded="full" color="red" p={4}>
          <Image src="/satisfaction.png" h="64px" w="70px" />
        </Box>

        <Box m={2}>
          <Heading fontSize="24px" color="blue.700">Satisfaction Guaranteed</Heading>
          <Text mt={2} color="gray.600">Our services include all satisfaction guarantees to the customers and vendors. </Text>
        </Box>
      </Flex>



    </Box>
  )
}

export default Whyus