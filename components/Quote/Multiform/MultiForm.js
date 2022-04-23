import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import { MultiStepForm, Step } from 'react-multi-form';
import One from './One';
import Three from './Three';
import Two from './Two';
const MultiForm = ({active, setActive}) => {


  const [service, setService] = useState('endoflease')
  const [bedroom, setBedroom] = useState(0)
  const [toilet, setToilet] = useState(0)


  return (
    <Box my={5}>
      <MultiStepForm activeStep={active} accentColor="#051e37">
        <Step label="one">
          <One service={service} setService={setService} bedroom={bedroom} setBedroom={setBedroom} toilet={toilet} setToilet={setToilet} />
        </Step>
        <Step label="Two">
          <Two active={active} setActive={setActive}/>
        </Step>
        <Step label="Three">
          <Three active={active} setActive={setActive}/>
        </Step>
      </MultiStepForm>
    </Box>
  )
}

export default MultiForm