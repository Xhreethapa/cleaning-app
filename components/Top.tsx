import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'
import { BiTimeFive } from 'react-icons/bi'
import { GoLocation } from 'react-icons/go'

const Top = () => {
  return (
    <Flex w="100%" justifyContent="space-between" position="fixed" top="0" zIndex="1001" >
        <Flex py={2} px={4} backgroundColor="red.500" w="70%" gap={5}>
            <Flex alignItems="center" gap={1} color="gray.200">
                <BiTimeFive/>
                <Text fontSize="13"> 07.00 - 17.00</Text>
            </Flex>
            <Flex alignItems="center" gap={1} color="gray.200">
                <GoLocation fontSize="sm"/>
                <Text fontSize="13"> Sydney, NSW</Text>
            </Flex>
            </Flex>
        <Flex py={2} backgroundColor="blue.800" w="30%" color="gray.200" justifyContent="center" fontSize="14"  gap={3}>
            <BsFacebook/>
            <BsTwitter/>
            <BsInstagram/>
        </Flex>
    </Flex>
  )
}

export default Top