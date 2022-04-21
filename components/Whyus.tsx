import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { BsTools } from 'react-icons/bs'
import { GrLike, GrMapLocation } from 'react-icons/gr'
import { MdOutlineRequestQuote } from 'react-icons/md'

const Whyus = () => {
  return (
    <Box backgroundColor="#fafafa" py={4}>
           <Box maxWidth="1000" mx="auto" px={4}>

      <Box textAlign="left" my={6} backgroundColor='#fafafa' py='10px'  display='flex' flexDirection='column' >
     <Box mx="auto">
     <Text color="red.600">WHY CHOOSE ELITE</Text>
      <Heading fontSize={25} color="blue.700" my={2}>Why Choose Our Service Provider</Heading>
     <Flex flexDirection="column" gap={5} my={4} > 
    <Flex flexDir={{base:"column", md:"row"}}>
    <Flex alignItems="center">
        <Box fontSize="30" rounded="full" color="red" >
          <Image src="/satisfaction.png" h={{  md:"55px"}}/>
        </Box>

        <Box m={2} pl={{base:3, sm:7}}>
          <Heading fontSize="20px" color="blue.700">Satisfaction Guaranteed</Heading>
          <Text mt={2} color="gray.400" fontSize="14" fontWeight="light">Our services include all satisfaction guarantees to the customers and vendors. </Text>
        </Box>
      </Flex>

      <Flex alignItems="center">
        <Box fontSize="30" rounded="full" color="red" >
          <Image src="/staffVet.png" h={{ md:"55px"}} w={{base:"20", sm:"16"}}/>
        </Box>

        <Box m={2} pl={{base:3, sm:9}}>
          <Heading fontSize="20px" color="blue.700">Screened & Trained Team</Heading>
          <Text mt={2} color="gray.400" fontSize="14" fontWeight="light">Our services include all satisfaction guarantees to the customers and vendors. </Text>
        </Box>
      </Flex>
    </Flex>
    <Flex flexDir={{base:"column", md:"row"}}>

      <Flex alignItems="center">
        <Box fontSize="30" rounded="full" color="red" >
          <Image src="/flexibleTime.png" h={{ md:"55px"}}/>
        </Box>

        <Box m={2} pl={{base:3, sm:5}}>
          <Heading fontSize="20px" color="blue.700">Flexible Arrival Time</Heading>
          <Text mt={2} color="gray.400" fontSize="14" fontWeight="light">Our services include all satisfaction guarantees to the customers and vendors. </Text>
        </Box>
      </Flex>  
      <Flex alignItems="center">
        <Box fontSize="30" rounded="full" color="red" >
          <Image src="/price.png" h={{  md:"55px"}} mr={{md:5}} pl={{md:2}}/>
        </Box>

        <Box m={2} pl={{base:3, sm:6}} >
          <Heading fontSize="20px" color="blue.700">Competitive Price</Heading>
          <Text mt={2} color="gray.400" fontSize="14" fontWeight="light">Our services include all satisfaction guarantees to the customers and vendors. </Text>
        </Box>
      </Flex>
      </Flex>
      </Flex>

        
     </Box>


    </Box>
    </Box>
    </Box>
  )
}

export default Whyus