import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineClockCircle} from 'react-icons/ai'

const Blogs = () => {
  return (
   <Box >
         <Box maxWidth="1000" mx="auto" px={4}  >

            <Flex flexDirection='column' alignItems='center'  >
                 <Text color='red'>Blogs</Text>
                 <Heading color='blue.800' my='2.5'>Our Latest News From </Heading>
                 <Heading color='blue.800' mb='15'>Blog</Heading>
                 <Flex   my='10' gap={9} flexDirection={{base:'column', sm:'column', md:'row'}}>
                    <Box width={360} backgroundColor='white' boxShadow='5px 10px 15px gray'  borderRadius='6px' >
                       <Box backgroundImage='https://cdn.apartmenttherapy.info/image/upload/v1602678006/at/art/photo/2020-10/How-To-Clean-Plants/How-to-Clean-Plants-2.jpg' height='230' borderRadius='6px'  backgroundSize='cover' backgroundPosition='center'  ></Box>
                       <Flex px='2' my='5' alignItems='center'>
                           <Flex px='2' alignItems='center'><AiOutlineClockCircle/> <Text pl='5'> June 12, 2021</Text> </Flex><Box borderLeft='1.5px solid gray' px='7' color='red'>Nature</Box>
                       </Flex>
                       <Heading px='5' color='blue.800' fontSize='28' fontWeight='bold'>How to clean your Plant yourself </Heading>
                       <Box px='15' color='gray' my='5' fontSize='large'>
                           Hello, i am mr. plant. i want to grow big plants. do you want too??, well i will show you how.
                           Hello, i am mr. plant. i want to grow big plants.
                       </Box>
                       <Text py='6' px='15' fontWeight='semibold' fontSize='largeer' color='red.500'> Read More...</Text>

                    </Box>

                    <Box width={360} backgroundColor='white' boxShadow='5px 10px 15px gray'  borderRadius='6px' >
                       <Box backgroundImage='https://www.godfreys.com.au/media/1000x494/carpet_cleaning.png' height='230' borderRadius='6px'  backgroundSize='cover' backgroundPosition='center'  ></Box>
                       <Flex px='1' my='5' alignItems='center'>
                           <Flex px='15' alignItems='center'><AiOutlineClockCircle/> <Text pl='5'> June 12, 2021</Text> </Flex><Box borderLeft='1.5px solid gray' px='7' color='red'>Cleaning services</Box>
                       </Flex>
                       <Heading px='5' color='blue.800' fontSize='28'fontWeight='bold'>How to  keep your Carpet Clean</Heading>
                       <Box px='15' color='gray' my='5' fontSize='large'>
                           Hello, i am mr. Carpet. i want to grow big Vaccume. do you want too??, well i will show you how.
                           Hello, i am mr. plant. i want to grow big plants.
                       </Box>
                       <Text py='6' px='15' fontWeight='semibold' fontSize='largeer' color='red.500'> Read More...</Text>

                    </Box>

                    <Box width={360} backgroundColor='white' boxShadow='5px 10px 15px gray'  borderRadius='6px' >
                       <Box backgroundImage='https://outsidetheboxmom.com/wp-content/uploads/2020/06/10-Reasons-Why-You-Need-to-Clean-Kitchen-Appliances-Regularly-2.jpeg' height='230' borderRadius='6px'  backgroundSize='cover' backgroundPosition='center'  ></Box>
                       <Flex px='1' my='5' alignItems='center'>
                           <Flex  px='15' alignItems='center'><AiOutlineClockCircle/> <Text pl='5'> June 12, 2021</Text> </Flex><Box borderLeft='1.5px solid gray' px='7' color='red'>cleaning services</Box>
                       </Flex>
                       <Heading px='5' color='blue.800' fontSize='28' fontWeight='bold'>Easy Ways to keep your kitchen clean</Heading>
                       <Box px='15' color='gray' my='5' fontSize='large'>
                           Hello, i am mr. plant. i want to grow big plants. do you want too??, well i will show you how.
                           Hello, i am mr. plant. i want to grow big plants.
                       </Box>
                       <Text py='6' px='15' fontWeight='semibold' fontSize='largeer' color='red.500'> Read More...</Text>

                    </Box>
                 </Flex>
                 <Flex backgroundColor='red.500' color='white' py='4' px='10' fontWeight='semibold' fontSize='large' border='none' borderRadius='7px' mt='5'>
                     Vew More Blogs
                 </Flex>

             </Flex>


         </Box>
   </Box>
  )
}

export default Blogs