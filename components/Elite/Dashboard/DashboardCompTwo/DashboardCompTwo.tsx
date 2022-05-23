import { ArrowUpIcon } from '@chakra-ui/icons'
import { Box, CircularProgress, CircularProgressLabel, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export default function DashboardCompTwo({ key, header, subHeader, price, bg, color }: any) {
    return (
        <Flex p='2' rounded='2xl' my='2' align='center' shadow='inner' justify='space-between' flexDirection='row' w={{ base: '100% ', md: '40%' }} h='30%' bg={bg}>
            <Stack p='2' spacing='2'>
                <Stack spacing='2'>
                    <Box>
                        <Text fontSize='16' fontWeight='bold' color='gray.800'>{header}</Text>
                        <Text fontSize='12' color='gray.500'>{subHeader}</Text>
                    </Box>
                    <Heading fontSize='22' color='gray.800'>{price}</Heading>
                </Stack>
            </Stack>
            <Flex flexDirection='row' align='center' rounded='full' p='1' justify='center' >
                {/* size={{ base: '60px', md: '80px' }} */}
                <CircularProgress thickness='10' value={40} color='gray.800' trackColor='gray.50' p='2' rounded='full'>
                    <CircularProgressLabel>
                        <Text fontSize='16' fontWeight='bold' color='gray.800'>40%</Text>
                    </CircularProgressLabel>
                </CircularProgress>
                <ArrowUpIcon color={color} h='4' marginLeft='-4' marginTop='-75' />
            </Flex>
        </Flex>

    )
}
