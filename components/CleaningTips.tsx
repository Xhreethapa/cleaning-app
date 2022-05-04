import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { AiFillSave } from 'react-icons/ai'
import { BsArrowRightShort, BsFillEyeFill } from 'react-icons/bs'









const blogs =[{
    title:'How to  keep your Carpet Clean: easy steeps',
    desc:' Hello, i am mr. Carpet. i want to grow big Vaccume. do you want too??, well i will show you how.',
    path:'',
    photo:'https://www.godfreys.com.au/media/1000x494/carpet_cleaning.png',
    day:' 12 june 2021 '
}, 
{
    title:'Easy Ways to keep your kitchen clean',
    desc:' Hello, i am mr. Carpet. i want to grow big Vaccume. do you want too??, well i will show you how.',
    path:'',
    photo:'https://outsidetheboxmom.com/wp-content/uploads/2020/06/10-Reasons-Why-You-Need-to-Clean-Kitchen-Appliances-Regularly-2.jpeg',
    day:' 12 june 2021 '
}, 
{
    title:'Common Tile Cleaning Mistakes ,Tips',
    desc:' Hello, i am mr. Carpet. i want to grow big Vaccume. do you want too??, well i will show you how.',
    path:'',
    photo:'https://www.wacer.com.au/wp-content/uploads/2020/03/how-to-clean-tile-grout.jpg',
    day:' 12 june 2020 '
}, 
{
    title:'Top tips for an amazing bathroom',
    desc:' Hello, i am mr. Carpet. i want to grow big Vaccume. do you want too??, well i will show you how.',
    path:'',
    photo:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/top-bottom-template-1-1583789549.jpg?crop=1.00xw:0.755xh;0,0&resize=480:*',
    day:' 12 june 2020 '
}, 
]

const CleaningTips = () => {
  return (
    <Box>
        <Box>
            <Flex justifyContent='center' flexDirection={{base:'column', sm:'column', md:'row'}} gap={3}>
                <Box  height='270' width='90%'>
                    <Box backgroundImage='https://cdn.apartmenttherapy.info/image/upload/v1603403266/at/organize-clean/cleaning-rubber-tree-plant.jpg' borderRadius='6px'  backgroundSize='cover' backgroundPosition='center' height='270px' width={{base:'300px', sm:'350px', md:"400px"}}></Box>
                </Box>
                <Flex px={{base:'1', sm:'1', md:"7px"}} flexDirection="column" justifyContent='space-between'>
                    <Flex px='2'  borderRadius='4px' backgroundColor='#EFEEFC' color='blue.600'width='90px'>Plant Tips</Flex>
                    <Heading color='blue.800'>How to Clean your plant Yourself</Heading>
                    <Text color='gray.400'> Hello, i am mr. plant. i want to grow big plants. do you want too??, well i will show you how. Hello, i am mr. plant. i want to grow big plants...</Text><Flex alignItems="center" color='red.500'><Text >Read More</Text><BsArrowRightShort/> </Flex>
                    <Flex alignItems="center" color='gray.500' borderRadius='4px' backgroundColor='#EFEEFC' px='2' width='110px' fontSize='smaller'>
                        <AiFillSave/><Text> 12 june 2021</Text>
                    </Flex>
                </Flex>
            </Flex>
            <Flex py='20'>
                <Flex flex='1' flexWrap='wrap' gap={5} >
                    {blogs.map(index =>(
                         <Flex flexDirection='column' maxWidth='285px' key={index}>
                         <Box >
                             <Box backgroundImage={index.photo} height='180' width='277px' backgroundSize='cover' backgroundPosition='center' borderRadius='9px'></Box>
                             
                         </Box>
                         <Flex color='gray.400' justifyContent='space-between' px='3'pt='2'>
                             <Flex gap='2'alignItems='center' fontSize='12' >
                             <AiFillSave/><Text> {index.day}</Text>
                             </Flex>
                             <Flex gap='2'alignItems='center'fontSize='12' >
                             <BsFillEyeFill/><Text>123</Text>
                             </Flex>
 
                         </Flex>
                        <Flex color='blue.800' fontSize='16'fontWeight='bold' px='2'>{index.title}
                            
                        </Flex>
                        <Box color='gray' fontSize='13' px='2' py='1'>
                            {index.desc}
                        </Box>
                        <Text fontWeight='semibold' fontSize='smaller' color='red.500' px='2'> Read More...</Text>
 
                        
                     </Flex>
 
                    ))}
                   
                </Flex>
                <Flex  flexDirection="column" display={{base:'none', sm:'none',md:'flex' }}> 
                <Flex  flexDirection="column" backgroundColor='#FCFCFE' px='10' py='10' borderRadius='9px' gap={5}>
                <Text color='blue.800' fontSize='16'fontWeight='bold'  >Recent Posts</Text>
                    <Flex alignItems="center" borderRadius='6px' backgroundColor='#F4F5F7' >
                        <Box>
                            
                     <Box backgroundImage='https://cdn.apartmenttherapy.info/image/upload/v1603403266/at/organize-clean/cleaning-rubber-tree-plant.jpg' borderRadius='6px'  backgroundSize='cover' backgroundPosition='center' height='55px' width='90px'></Box>
                            </Box>
                            <Flex flexDirection='column' px='2'  >
                            <Text fontSize='11'color='gray.400'>plant cleaning</Text>
                            <Text fontSize='13' fontWeight='semi-bold'>How to clean Plant</Text>
                            <Flex fontSize='12' alignItems='center' color='gray.400'><AiFillSave/><Text> 12 june 2021</Text></Flex>
                        </Flex>
                    </Flex>
                    <Flex alignItems="center" borderRadius='6px' backgroundColor='#F4F5F7' >
                        <Box>
                            
                     <Box backgroundImage='https://cdn.apartmenttherapy.info/image/upload/v1603403266/at/organize-clean/cleaning-rubber-tree-plant.jpg' borderRadius='6px'  backgroundSize='cover' backgroundPosition='center' height='55px' width='90px'></Box>
                            </Box>
                            <Flex flexDirection='column' px='2'  >
                            <Text fontSize='11'color='gray.400'>plant cleaning</Text>
                            <Text fontSize='13' fontWeight='semi-bold'>How to clean Plant</Text>
                            <Flex fontSize='12' alignItems='center' color='gray.400'><AiFillSave/><Text> 12 june 2021</Text></Flex>
                        </Flex>
                    </Flex>
                    <Flex alignItems="center" borderRadius='6px' backgroundColor='#F4F5F7' >
                        <Box>
                            
                     <Box backgroundImage='https://cdn.apartmenttherapy.info/image/upload/v1603403266/at/organize-clean/cleaning-rubber-tree-plant.jpg' borderRadius='6px'  backgroundSize='cover' backgroundPosition='center' height='55px' width='90px'></Box>
                            </Box>
                            <Flex flexDirection='column' px='2'  >
                            <Text fontSize='11'color='gray.400'>plant cleaning</Text>
                            <Text fontSize='13' fontWeight='semi-bold'>How to clean Plant</Text>
                            <Flex fontSize='12' alignItems='center' color='gray.400'><AiFillSave/><Text> 12 june 2021</Text></Flex>
                        </Flex>
                    </Flex>

                </Flex>
                   
                </Flex>
            </Flex>
        </Box>
    </Box>
  )
}

export default CleaningTips