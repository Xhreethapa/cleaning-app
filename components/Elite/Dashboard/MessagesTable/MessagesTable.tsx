import { Flex, Stack, Tab, TabList, TabPanels, Tabs, Text, TabPanel } from '@chakra-ui/react'
import React, { useState } from 'react'
import MessagesCard from './MessagesCard'


export default function MessagesTable({ data }) {
    const [selectedMessage, setSelectedMessage] = useState('');

    return (
        <Flex flexDirection="column" align="center" bg='gray.50' w='40%' rounded='xl'>
            <Flex flexDirection="column" align="center" w='full'>
                <Tabs variant='unstyled' w='full' align='center' py='6' >
                    <TabList bg='gray.200' px='4' py='2' w='91%' rounded='lg' shadow='inner' color='gray.400'>
                        <Tab _selected={{ bg: 'white', rounded: 'md', shadow: 'lg', px: '8', color: 'red.400' }} ><Text fontSize="18px" fontWeight="bold" >Open</Text></Tab>
                        <Tab _selected={{ bg: 'white', rounded: 'md', shadow: 'lg', px: '8', color: 'red.400' }} ><Text fontSize="18px" fontWeight="bold" >Unseen</Text></Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            {data.map((item) => {
                                return (<MessagesCard
                                    key={item.id}
                                    selected={selectedMessage}
                                    setSelectedMessage={setSelectedMessage}
                                    address={item.address}
                                    contact={item.contact}
                                    service={item.service}
                                    time={item.time}
                                />)
                            })}
                        </TabPanel>
                        <TabPanel>
                            <MessagesCard />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Flex>
        </Flex>
    )
}
