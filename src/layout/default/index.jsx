import React,{useRef} from 'react'
import Box from '@mui/material/Box'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { Outlet } from 'react-router-dom'
import { useTheme } from '@mui/material'
import ScrollToTop from '../../component/ScrollToTop.jsx'

const DefaultLayout = () => {
  const mainRef=useRef(null)
  const theme=useTheme()
  console.log(theme,'indexTheme')
  return (
    <Box component="div" sx={{width:'screen',minHeight:'screen',display:'flex',flexDirection:'column',background:theme.palette.background}}>
      <ScrollToTop/>
      <Header contentRef={mainRef}/>
      <Box component='main' sx={{overflow:'auto',height:'min-screen',position:'relative'}} ref={mainRef} paddingTop='4rem'>
        <Outlet/>
      </Box>
      <Footer contactRef={mainRef}/>
    </Box>
  )
}

export default DefaultLayout