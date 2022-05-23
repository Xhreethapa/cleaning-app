import { AddIcon, CloseIcon, DeleteIcon, DragHandleIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon } from '@chakra-ui/icons'
import { Badge, Box, Button, Flex, Image, Input, Menu, MenuButton, MenuItem, MenuList, Skeleton, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

export default function MessagesBox() {
    const [respondEnable, setRepondEnable] = useState(false)
    const [replyMessage, setReplyMessage] = useState("")

    const ReplyMessage = () => {
        return (
            <>
                <Flex flexDirection='column' mb='4'>
                    <Box rounded='lg' bg='gray.50' border='0'
                        position='absolute' bottom='10'
                        fontSize='12' color='gray.50'>
                        <Input placeholder='reply' w='385px' value={replyMessage} onChange={(e) => setReplyMessage(e.target.value)} />
                    </Box>

                </Flex></>
        )
    }

    return (
        <Flex bg="red.100" p={25} h='800' position={{ base: 'absolute', md: 'relative' }} display={{ base: '', md: 'inline' }}>
            <Flex flexDirection='row' align="center" justify="space-between" bg='white' p='2' w='385px' rounded='lg'>
                <Flex align="center" ml='2'>
                    <Flex w='60px' h='60px' p='2' align="center" justify="center" rounded="full" shadow='lg' borderWidth='3px' borderColor='green.400' >
                        <Image src="https://cdn-icons-png.flaticon.com/512/4333/4333609.png" w='40px' h='40px' />
                    </Flex>
                    <Text fontSize='16' fontWeight='bold' color='gray.800' ml='4'>John Doe</Text>
                </Flex>

                <Flex align='center'>
                    <Menu>
                        <MenuButton ml='-6'><HamburgerIcon /></MenuButton>
                        <MenuList>
                            <MenuItem icon={<DeleteIcon w='18px' h='18px' color='red.400' />} >
                                <Text mt='3px'>Delete</Text>
                            </MenuItem>
                            <MenuItem icon={<ExternalLinkIcon />} >
                                <Text mt='3px'>Reply</Text>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </Flex>


            <Flex flexDirection='column' p='0'>

                <Flex bg='white' p='4' flexDirection='column' rounded='lg' my='6'>
                    <Box mb='4'>
                        <Box rounded='lg' bg='blue.600'
                            fontSize='12' color='white'>
                            <Text p='2' alignSelf='bottom'>The noun text can be countable or uncountable. In more general, commonly used, contexts, the plural form will also be text. However, in more specific contexts, the plural form can also be texts e.g. in reference to various types of texts or a collection of texts.</Text>
                        </Box>
                        <Text fontSize='12' color='gray.600' alignSelf='bottom' ml='2'>14 May 2022 8 PM</Text>
                    </Box>

                    {respondEnable ?
                        <Flex align='center' flexDirection='column'>

                            <Flex flexDirection='column' mb='4'>
                                {replyMessage ?
                                    <Box rounded='lg' bg='gray.600'
                                        fontSize='12' color='gray.50'>
                                        <Text p='2' alignSelf='bottom'>{replyMessage}</Text>
                                    </Box>
                                    : <Skeleton height='35px' rounded='lg' />
                                }
                                <Flex flexDirection='row' w='350px' justify='space-between' align='center' mt={replyMessage ? '2' : '0'} >
                                    <Text fontSize='12' color='gray.600' ml='2'>Your response</Text>
                                    {
                                        replyMessage ? <Flex cursor='pointer' py='px' onClick={() => { setRepondEnable(false), setReplyMessage('') }} alignSelf='flex-end' rounded='full' align='center' justify='center' bg='red.400' p='2' >
                                            {/* <Text fontSize='12' fontWeight='bold'>cancel</Text> */}
                                            <CloseIcon color='white' w='12px' h='12px' />
                                        </Flex> : null
                                    }
                                </Flex>
                            </Flex>

                        </Flex> : null}

                </Flex>

                {respondEnable ? <ReplyMessage /> : null}




            </Flex>

            {!respondEnable ?
                <Button bg='green.400' position='absolute' bottom='5' my='4' w='385px' alignSelf='center' onClick={() => setRepondEnable(true)}>
                    <Text fontSize='16' fontWeight='bold' color='gray.50' ml='4'>Respond</Text>
                </Button>
                :
                null
            }
        </Flex>
    )
}
