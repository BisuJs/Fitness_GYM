import React from 'react'
import Hero from './Hero'
import Features from '../../component/Features'
import AboutUs from './AboutUs'
import Services from './Services'
import Pricing from './Pricing'
import Gallery from './Gallery'

const Home = () => {
  return (
    <>
    <Hero/>
    <AboutUs/>
    <Services/>
<Pricing/>
<Gallery/>
    <Features/>
    </>
  )
}

export default Home