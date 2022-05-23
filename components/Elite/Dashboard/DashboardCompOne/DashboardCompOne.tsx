import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useRouter } from 'next/router'

export default function DashboardCompOne({ header, count, footer, icon, onPress }: any) {
    const router = useRouter()
    return (
        <Stack p='2' spacing='6' onClick={() => router.push('/messages')} cursor='pointer'>
            <Flex bg='green.300' p='4' w='45px' shadow='lg' h='45px' align='center' justify='center' rounded='full'>{icon}</Flex>
            <Box>
                <Text fontSize='14' color='gray.500'>{header}</Text>
                <Heading color='gray.700' >{count}</Heading>
                <Text fontSize='14' color='orange.400'>{footer}</Text>
            </Box>
        </Stack >
    )
}
