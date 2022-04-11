import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Text } from '@chakra-ui/react'
import React from 'react'

const Faq = () => {
  return (
   
    <Box>
        <Text display='flex' justifyContent='center' alignItems='center'> Frequently Asked Questions(FAQs)</Text>
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
    </Box>
  )
}

export default Faq