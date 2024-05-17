import { Box,TextField,Typography } from '@mui/material'
import React from 'react'
import ButtonComp from '../../../component/Button'
const Login = () => {
  return (
    <Box display='flex' flexDirection={'column'} width='100vw' height='100vh' justifyContent={'center'} alignItems='center' >
        <Box width='20vw' height='25vh' border={'1px solid white'} display='flex' flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
        <Typography variant='h3' paddingBlock='1rem'>Login</Typography>
        <Box component='form' display='flex' flexDirection={'column'} justifyContent={'center'} alignItems={'center'} >
<TextField id="outlined-basic" label="Outlined" variant="outlined" />
<TextField id="outlined-basic" label="Outlined" variant="outlined" />
<ButtonComp message='login' sx={{color:'white'}}></ButtonComp>
</Box>
</Box>
    </Box>
  )
}

export default Login