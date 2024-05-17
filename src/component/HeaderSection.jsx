import React from 'react'
import image from '../assets/boyGym.jpg'
import {Box,Typography} from '@mui/material'
const HeaderSection = ({title,description}) => {
  return (
<Box heigth='min-screen'>
    <Box position='relative' height='50dvh'>
        <Box component='img' src={image} alt="image" height='100%' aspectRatio='1/1' width='100%' objectFit='cover' objectPosition='center' />
        <Typography sx={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', fontSize:'2rem',fontWeight:'bold'}}>{title}</Typography>
        <Typography sx={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,60%)',fontWeight:'semi-bold'}}>{description}</Typography>
    </Box>
</Box>
)
}

export default HeaderSection