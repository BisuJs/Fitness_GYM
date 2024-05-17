import  Box from '@mui/material/Box'
import React from 'react'
import Navbar from './Navbar'
import { useTheme } from '@mui/material'
import { tokens } from '../../theme'
const Header = () => {
  const theme=useTheme();
  const colors=tokens(theme.palette.mode)
  return (
    <Box component='header' sx={{width:'100vw',position:'fixed',top:'2',zIndex:'40',backgroundColor:colors.primary[400],py:'0.8rem',mb:'2rem',borderBottom:`1px solid ${colors.greenAccent[400]}`}}>
        <Navbar />
    </Box>
  )
}

export default Header