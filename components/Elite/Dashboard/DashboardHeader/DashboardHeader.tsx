import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export default function DashboardHeader() {
    return (
        <Flex flexDirection='row' align='center'>
            <Box>
                <Heading>Hello Android</Heading>
                <Text color='gray.400'>Welcom Back!</Text>
            </Box>
        </Flex>
    )
}
