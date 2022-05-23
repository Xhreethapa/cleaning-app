import { AtSignIcon } from '@chakra-ui/icons'
import { Box, Divider, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function MessagesCard({ contact, address, time, service, setSelectedMessage, selected, key }) {
    return (
        <>
            <Flex flexDirection='column' align='center' cursor='pointer' px='4' py='2' borderRight={key = selected ? '2px solid gray' : 'null'} borderColor={key = selected ? 'red.400' : 'null'} onClick={() => setSelectedMessage(service)}>
                <Flex flexDirection='row' w="full">
                    <Box marginRight='4'>
                        <Image src="https://cdn-icons-png.flaticon.com/512/4333/4333609.png" w='80px' h='60px' />
                    </Box>
                    <Flex w='full' flexDirection='column' justify="space-between" py='1'>
                        <Flex flexDirection='row' align='flex-end' justify="space-between">
                            <Text fontSize='16' fontWeight='bold' color='gray.800' alignSelf='flex-start'>{contact}</Text>
                            <Text fontSize='12' color='gray.500' alignSelf='bottom'>{time}</Text>
                        </Flex>
                        <Text fontSize='14' fontWeight='semibold' color='teal.300' alignSelf='flex-start' >{service}</Text>
                        <Flex align='center' w='full'>
                            <AtSignIcon w='14px' h='14px' color='red.300' marginRight='2' />
                            {/* <Text fontSize='14' fontWeight='semibold' color='gray.400' alignSelf='flex-start'>{address}</Text> */}
                            <Text>{key}</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Divider orientation='horizontal' />
        </>
    )
}
