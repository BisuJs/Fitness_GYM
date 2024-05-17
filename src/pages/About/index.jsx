import React from 'react'
import HeaderSection from '../../component/HeaderSection'
import AboutUs from '../Home/AboutUs'
import WhyChooseUs from '../Home/WhyChooseUS'
import {Box} from '@mui/material'
import OurTeam from '../Home/OurTeam'
import Testimonial from '../Home/Testimonial'
const About = () => {
  return (
    <Box>
    <HeaderSection title='About'description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, optio recusandae ad officiis perspiciatis odit?'/>
    <Box component='div' width='80vw' mx='auto'>
    <AboutUs/>
    <WhyChooseUs/>
    <OurTeam/>
    <Testimonial/>
    </Box>
    </Box>
  )
}

export default About