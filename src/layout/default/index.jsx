import React from 'react'
import Box from '@mui/material/Box'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { Outlet } from 'react-router-dom'
import { useTheme } from '@mui/material'
const DefaultLayout = () => {
  const theme=useTheme()
  console.log(theme,'indexTheme')
  return (
    <Box component="div" sx={{width:'screen',minHeight:'screen',display:'flex',flexDirection:'column',position:'relative',background:theme.palette.background}}>
      <Header/>
      <Box component='main' sx={{width:'80vw', mx:'auto'}}>
        <Outlet/>
      </Box>
      <Footer/>
    </Box>
  )
}

export default DefaultLayout