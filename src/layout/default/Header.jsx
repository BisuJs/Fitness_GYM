import  Box from '@mui/material/Box'
import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <Box component='header' sx={{width:'80vw', mx:'auto',py:'0.8rem',position:'relative',mb:'2rem'}}>
        <Navbar/>
    </Box>
  )
}

export default Header