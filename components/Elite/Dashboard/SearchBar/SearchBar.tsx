import { Box, Flex, Icon, Image, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import React from 'react'
import { PhoneIcon, AddIcon, WarningIcon, SearchIcon } from '@chakra-ui/icons'

export default function SearchBar() {
    return (
        <Flex flexDirection="row" align='center' w='70%' rounded='2xl' borderWidth={2} borderColor='gray.300' px='4' py='1'>
            <SearchIcon w={'25px'} h={"25px"} color='gray.600' />
            <Input rounded='null' borderWidth='0' placeholder='Search here' />
        </Flex>
    )
}