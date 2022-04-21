import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const About = () => {
    return (
        <Box px={4} my={4}>
            <Text color="red">ABOUT US</Text>
            <Heading color="blue.700" fontSize={25}>Best Cleaning Services Provider in Sydney</Heading>
            <Text py={4} fontSize={15} color="gray.400">We as a top-rated cleaning services provider, do our best to keep your home or office clean and tidy. With our years of experience in the industry, we know what it takes to make your place feel like a home. We offer all kinds of cleaning services, from carpet cleaning to the End of the lease, for fellow Sydneysiders. </Text>
        </Box>)
}

export default About