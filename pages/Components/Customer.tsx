import { Box, Flex, Image, Text, Textarea } from '@chakra-ui/react'
import React from 'react'
import { BsStarFill } from 'react-icons/bs'




const reviews = [
    {
    image:'/milan.jpeg',
    nameCustomer:'Milan Adhikari',
    desc:'Hello hello keta ho'
},
{
    image:'/nikhil.jpeg',
    nameCustomer:'Rajat Chhetri',
    desc:'Hello hello keta ho'
},
{
    image:'/rahesh.png',
    nameCustomer:'shree thapa',
    desc:'Hello hello keta ho'
}]

const Customer = () => {
  return (
<Box backgroundColor=' #DFDEFE' borderRadius='0px 30px 0px 0px' py='10px' px='10px'>
    <Text my='10px' fontSize='larger' fontWeight='bold' color='white' >Know What our customer Says:</Text>
    {reviews.map((index)=>
    <Box key={index} backgroundColor='whitesmoke' borderRadius='9px 9px 9px 9px' width='270px' px='5px' py='5px'my='7px'> 
        <Flex >
           
           
             <Box px='7px'>
             <Text>{index.nameCustomer}</Text>
             <Textarea>
                 {index.desc}
             </Textarea>
            <Flex>
                <Text>Google Rating :</Text><Flex alignItems='center'> <BsStarFill color='FFBF67'/> <BsStarFill color='FFBF67'/> <BsStarFill color='FFBF67'/> <BsStarFill color='FFBF67'/> <BsStarFill color='FFBF67'/> </Flex>
            </Flex>


         </Box>
         <Box>
             <Box height='50px' width='50px' borderRadius='50' backgroundColor='#DFDEFE' backgroundImage={index.image} backgroundPosition='center' backgroundSize='cover'>


             </Box>
         </Box>
            
            
           
            
           
           

        </Flex>
    </Box>
     )}

</Box>
  )
}

export default Customer