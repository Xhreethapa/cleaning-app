import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const OurServices = () => {
  return (
   <Box backgroundColor='#DFDEFE' px='15' h='auto'>
               <Text display='flex' justifyContent='center' alignItems='center' my='10' color='#5C4CB1' fontWeight='bold' fontSize='larger'> Our Services</Text>
                <Text my='10' display='flex' justifyContent='center' alignItems='center'>Check out what services we offer</Text>

                <Box marginBottom='5px'>
                    <Flex backgroundColor='#5C4CB1' px='5' justifyContent='space-between' border='none'h='200px'  borderRadius='13px'>
                        <Text color='white' fontWeight='bold' fontSize='larger'  marginTop='5'>End of Lease Cleaning</Text><Text>From $250</Text>
                    </Flex>
                    <Box backgroundColor='white' px='5' h='200px' width='85%' position='relative' left='25px' bottom='150px' py='5' borderRadius='11px' zIndex='100'>
                       <Text color='#5C4CB1' marginBottom='5'> Book our Quality End of Lease Cleaning. Call us Now</Text>
                       <Text>
                        Book our 72 hours Bond-Back guarantee , Lease cleaning service and you can just sit back and relax while our professionals are on it.
                       </Text>
                    </Box>
                </Box>
                <Box>
                    <Flex backgroundColor='#5C4CB1' px='5' justifyContent='space-between'  h='200px' border='none' borderRadius='13px'>
                        <Text color='white' fontWeight='bold' fontSize='larger'>Carpet Steam Cleaning</Text><Text>From $150</Text>
                    </Flex>
                    <Box backgroundColor='white' px='5'  width='85%' position='relative' h='200px' left='25px' bottom='150px' py='5' borderRadius='11px'>
                       <Text color='#5C4CB1' marginBottom='5'> Book our Quality End of Lease Cleaning. Call us Now</Text>
                       <Text>
                        best carpet cleaning in the town
                       </Text>
                    </Box>
                </Box>
   </Box>
  )
}

export default OurServices