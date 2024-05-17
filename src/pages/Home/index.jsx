import React from 'react'
import Hero from './Hero'
import AboutUs from './AboutUs'
import Services from './Services'
import Pricing from './Pricing'
import Gallery from './Gallery'
import OurTeam from './OurTeam'
import Testimonial from './Testimonial'
import WhyChooseUs from './WhyChooseUS'
import {Box} from '@mui/material'
const Home = () => {
  return (
    <Box component='div' width='80vw' mx='auto'>
    <Hero/>
    <AboutUs/>
    <Services/>
<Pricing/>
<Gallery/>
<OurTeam/>
<WhyChooseUs/>
<Testimonial/>
    </Box>
  )
}

export default Home