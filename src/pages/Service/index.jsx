import React from 'react'
import Services from '../Home/Services'
import Pricing from '../Home/Pricing'
import {Box} from '@mui/material'
import HeaderSection from '../../component/HeaderSection'
const Service = () => {
  return (
    <Box>
    <HeaderSection title='Service' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, optio recusandae ad officiis perspiciatis odit?'/>
    <Box component='div' width='80vw' mx='auto'>
    <Services/>
    <Pricing/>
    </Box>
    </Box>
  )
}

export default Service
