import { Box, Flex, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React from 'react'
import { BsStar, BsStars } from 'react-icons/bs'
import { GiVacuumCleaner } from 'react-icons/gi'
import Banner from '../components/Banner'
import CleaningTips from '../components/CleaningTips'
import Footer from '../components/Footer'
import Top from '../components/Top'

const allBlogs = () => {
  return (
   <Box  mt='150'>
       <Top/>
       <Banner/>
       
          <Box py='10'  alignItems='center' backgroundColor='#F9FAFC' width='100%'>
          <Flex flexDirection="column" maxWidth="1000" mx="auto" px={4}>
              <Flex justifyContent="space-between" >
              <Box>
                    <BsStars color='blue.800'/>
                    <GiVacuumCleaner fontSize='xxx-large'/>

              </Box>
              
              <Heading color='blue.800' display='flex' justifyContent="center" alignItems='center'>Our Blogs</Heading>
              <Box>
                  <BsStar/>
                  <BsStar/>
                  

              </Box>
              </Flex>
              <Flex>
              <Text px='10' display='flex' justifyContent="center" alignItems='center' pt='10'>Welcome to our Blogs. Get some expert advices and cleaning tips that might come handy while minor cleaning a home by yourself.</Text>
              

              </Flex>
            
           
             
         
          </Flex>
          </Box>
          <Box maxWidth="1000" mx="auto" px={4} >

          <Box pt='10'>
          <Tabs>
                 <TabList>
                    <Tab>Cleaning Tips</Tab>
   
                     </TabList>

                 <TabPanels>
                     <TabPanel>
                     <CleaningTips/>
                </TabPanel>
                 <TabPanel>
                          <p>two!</p>
                 </TabPanel>
              <TabPanel>
                    <p>three!</p>
               </TabPanel>
             </TabPanels>
         </Tabs>

          </Box>
          </Box>

          <Footer/>
        
   </Box>
  )
}

export default allBlogs