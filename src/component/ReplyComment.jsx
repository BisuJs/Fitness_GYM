import { Box,Typography,TextField,Grid } from '@mui/material'
import React from 'react'
import {useTheme} from '@mui/material';
import { tokens } from '../theme';
import ButtonComp from './Button';
const ReplyComment = ({title}) => {
const theme=useTheme();
const colors=tokens(theme.palette.mode)
const formList=[{
    id:'name',
    label:'name',
    number:'6',

},{
    id:'email',
    label:'email',
    number:'6',

},{
    id:'comment',
    label:'comments',

    
    rows:{rows:4,multiline:true},
    number:'12'
}]
// class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-formControl css-iiujvs-MuiInputBase-root-MuiOutlinedInput-root"
  return (
    <Box>
        <Typography variant='h3' paddingBlock='1rem'>{title}</Typography>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '100%' },
        
        
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor:colors.grey[100] , // Change the border color when focused
          },
          '& .MuiInputLabel-outlined.Mui-focused': {
            color: 'white', // Change label color when focused
          },
        
      }}
      noValidate
      autoComplete="off"
    >
        <Grid container spacing={{ xs: 2, md: 3 }} sx={{flexGrow:1}}>
   {formList?.map(item=>(
    <Grid md={item?.number} xs={item?.number} spacing={{xs:2,md:4}} sx={{padding:'0.5rem'}}>
    <TextField id={item?.name} label={item?.label}  variant="outlined" {...item?.rows} fullWidth/>
    </Grid>
))}
</Grid>
     <ButtonComp message='Reply' styles={{backgroundColor:colors.greenAccent[500],maxWidth:'max-content',transition:"all",transitionTimingFunction:'ease-in-out',transitionDuration:'150ms',':hover':{
      backgroundColor:colors.greenAccent[400]
     }}}></ButtonComp>
    </Box>


    </Box>
  )
}

export default ReplyComment