import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import { MultiStepForm, Step } from 'react-multi-form';
import One from './One';
const MultiForm = () => {


    const [service, setService] = useState('endoflease')
    const [bedroom, setBedroom] = useState(0)
    const [toilet, setToilet] = useState(0)

  return (
   <Box my={5}>
 <MultiStepForm activeStep={1} accentColor="#051e37">
        <Step label="one">
          <One service={service} setService={setService} bedroom={bedroom} setBedroom={setBedroom} toilet={toilet} setToilet={setToilet}/>
        </Step>
        <Step label="Two">
          <p>Two</p>
        </Step>
        <Step label="Three">
          <p>Three</p>
        </Step>
      </MultiStepForm>
   </Box>
  )
}

export default MultiForm