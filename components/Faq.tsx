import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React from 'react'

const Faq = () => {
  return (
   
    <Box pb={8}>
           <Box maxWidth="1000" mx="auto" px={4}>

  <Text color="red" fontSize="15">
        FAQ'S
      </Text>
      <Heading fontSize="28" color="blue.700" >
        Some Questions That Might Help You Know Elite Clean.
      </Heading>   
         <Text py={3} fontSize="13" textAlign="left" color="gray.600" lineHeight="2">Some questions that might help you in getting to know Elite Clean, these questions are collected according to the results of research questions that often arise</Text>
        <Box w={{base:"100%", md:"800px"}} mx="auto">
        <Tabs isFitted variant='enclosed' outline='none'>
  <TabList my='1em'>
    <Tab _focus={{outline:"none"}} fontSize="16" fontWeight="semibold" cursor="pointer" >General</Tab>
    <Tab _focus={{outline:"none"}} fontSize="16" fontWeight="semibold" cursor="pointer">Pricing</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
    <Accordion allowToggle>
  <AccordionItem fontSize="14" p={2} borderTop="none">
    <h2>
      <AccordionButton _focus={{outline:"none"}}  >
        <Box flex='1' textAlign='left' fontSize="14px">
          What is End of Lease Cleaning?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel color="gray.500" pb={4}>
    When you move out of your property and the new tenants have to move in, then require Deep Cleaning of the property.    </AccordionPanel>
  </AccordionItem >

  <AccordionItem fontSize="14px" p={2} >
    <h2>
      <AccordionButton _focus={{outline:"none"}}>
        <Box flex='1' textAlign='left' fontSize="14px">
      Do I Need to Provide any Cleaning Materials for End of Tenancy Cleaning?        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} color="gray.500">
    No, we provide all the cleaning Materials and Equipment to deep clean trough out your property.    </AccordionPanel>
  </AccordionItem>
  <AccordionItem fontSize="14px" p={2}>
    <h2>
      <AccordionButton _focus={{outline:"none"}}>
        <Box flex='1' textAlign='left' fontSize="14px">
      How long should a house cleaning take?        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} color="gray.500">
    It depends entirely on the size of your house! The minimum booking length is 3 hours, but you can always a request a longer booking if you need one. Depending on the number of bedrooms and bathrooms you have, our checkout.   </AccordionPanel>
  </AccordionItem>
</Accordion>
    </TabPanel>
    <TabPanel>
    <Accordion allowToggle>
    <AccordionItem fontSize="14px" p={2} borderTop="none">
    <h2>
      <AccordionButton _focus={{outline:"none"}}>
        <Box flex='1' textAlign='left' fontSize="14px">
      How much do you charge?      </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} color="gray.500">
    The cost of your end of lease clean generally depends on the size of your property. We charge in accordance with the number of bedrooms and bathrooms in your home. There are additional charges for extra services that are not included in the general scope of our standard bond clean. These include carpet steam cleaning, outside windows, extra balconies, full wall washing and extra blinds. If the property requires a more thorough cleaning, we may reserve the right to charge extra, this will be communicated to you before we start cleaning.   </AccordionPanel>
  </AccordionItem>

  <AccordionItem fontSize="14px" p={2}>
    <h2>
      <AccordionButton _focus={{outline:"none"}}>
        <Box flex='1' textAlign='left' fontSize="14px">
     How would I get a free quote?      </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} color="gray.500">
    If you only need an estimate for the cleaning of your leased property and do not want to book yet, we have got you covered. We offer free quotes that do not incur any obligations or charges. You can contact our support team to get your free estimate today. You can also go to booking page to get quote on the website. It allows clients to understand the costing and use the quote to compare the pricing with other cleaning companies. We have no hidden charges and provide the final costing upfront so that you can make an informed decision.     </AccordionPanel>
  </AccordionItem>
</Accordion>
    </TabPanel>
  </TabPanels>
</Tabs>
</Box>
       </Box>
    </Box>
  )
}

export default Faq