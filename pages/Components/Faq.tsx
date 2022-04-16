import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React from 'react'

const Faq = () => {
  return (
   
    <Box>
        <Text display='flex' justifyContent='center' alignItems='center' my='10'> Frequently Asked Questions(FAQs)</Text>

        <Tabs isFitted variant='enclosed' outline='none'>
  <TabList mb='1em'>
    <Tab>One</Tab>
    <Tab>Two</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
    <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          what is your name
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
     my name is elite cleaning thapa
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          how old are you
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
     hero hero 
    </AccordionPanel>
  </AccordionItem>
</Accordion>
    </TabPanel>
    <TabPanel>
    <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          what is your name
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
     my name is elite cleaning thapa
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          how old are you
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
     hero hero 
    </AccordionPanel>
  </AccordionItem>
</Accordion>
    </TabPanel>
  </TabPanels>
</Tabs>
       
    </Box>
  )
}

export default Faq