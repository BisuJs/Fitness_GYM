import React,{useEffect, useState} from 'react'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import MenuItem from '../../component/MenuItem'
import Stack from '@mui/material/Stack'
import  Typography from '@mui/material/Typography'
import ButtonComp from '../../component/Button.jsx'
import { useTheme } from '@mui/material'
import { tokens } from '../../theme.js'
import { useContext } from 'react'
import { ColorModeContext } from '../../theme.js'
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import Button from '@mui/material/Button';
const Navbar = () => {
  const [selected,setSelected]=useState('home')
  const theme=useTheme()
  const colorMode=useContext(ColorModeContext);
  const colors=tokens(theme.palette.mode)
  console.log(colors)
  console.log(colors.greenAccent[400],'greenAccent ')
 
  const navbarItem=[{
    id:1,
    title:'home',
    path:'/'
  },{
    id:2,
    title:'about',
    path:'/about',
    
  },
  {
id:4,
title:'service',
path:'/service'
  },
{
  id:5,
  title:'Blog',
  path:'/blog'
},
{
  id:6,
  title:'Contact Us',
  path:'#contact-us',
  
}]
  return (
    <Box sx={{width:'80vw',mx:'auto'}}>
      <Box component='div' sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
      <Box component='div'>
        <Link href="/" sx={{textDecoration:'none'}}>
        <Typography variant='h1' sx={{fontSize:'2rem',fontWeight:'bold',textTransform:'uppercase',letterSpacing:'0.1rem',display:'flex',color:theme.palette.neutral.dark}}>
          Fit
          <Typography variant='h1' sx={{fontSize:'2rem',fontWeight:'bold',textTransform:'uppercase', letterSpacing:'0.1rem',color:theme.palette.secondary.main }}>ness</Typography>
          </Typography>
          </Link>
      </Box>
     <Box component="nav" sx={{display:'flex',gap:'2rem'}}> 
     <Stack
  direction="row"
  spacing={6}
>
      {navbarItem?.map(item=>(
       <MenuItem message={item.title} path={item.path} key={item.id} sx={
        {textTransform:'capitalize',fontSize:'1.3rem',fontWeight:'bold',color:selected===item.title ?colors.blueAccent[500]:colors.grey[200],":hover":{
      color:colors.blueAccent[500]
          },transition:'all',transitionDuration:'150ms',transitionTimingFunction:'ease-in-out'}
       } selected={selected} setSelected={setSelected}/>
      ))}
      </Stack>
      <Button sx={{background:'none',':hover':{
        background:'none'
      }}} onClick={colorMode.toggleColorMode}>
        {theme.palette.mode==='dark'? <MdDarkMode fontSize='30'color={colors.grey[100]}/>: <MdLightMode fontSize='30' color={theme.palette.neutral.neutral}/>}
      </Button>
      <Box component='div'>
      <ButtonComp message='register now' styles={{background:colors.greenAccent[700],color:colors.grey[100],":hover":{
        background:colors.greenAccent[600]
      }}}/>
    </Box>
    </Box>
    </Box>
      </Box>
  )
}

export default Navbar