import React from 'react'
import Box from '@mui/material/Box'
import images from "../../assets/girl.png"
import { Typography } from '@mui/material'
import ButtonComp from '../../component/Button'
import { useTheme } from '@mui/material'
import { tokens } from '../../theme'
import { motion } from 'framer-motion'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Hero = () => {
  const theme=useTheme();
  const colors=tokens(theme.palette.mode)

  return (
    <Box component='div' display='flex' justifyContent={'space-between'} height='95vh' alignItems={'center'} gap='24rem'>
      <motion.Box component='div' flexBasis={1}
       initial={{opacity:0,x:'-130%'}}
       animate={{opacity:1,x:'0'}}
       transition={{ duration: 3}}
      >
        <Box component='div' paddingBottom={'40px'}>
<Typography variant='h1' sx={{fontSize:'80px',fontWeight:'bold',textTransform:'Uppercase',color:'transparent',textStroke:'2px white',WebkitTextStroke:'2px white',paddingBottom:'20px'}}>
Empower Your 
</Typography>
<Typography variant='h1' sx={{fontSize:'80px',fontWeight:'bold',textTransform:'Uppercase'}}>
Fitness Journey
</Typography>
        </Box>
        <Box component={'div'} paddingBottom={'40px'}>
          <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit maiores, nihil quam ea odio nemo neque! Fugit laboriosam impedit adipisci.</Typography>
        </Box>
        <Box>
          <ButtonComp message='Get Started' styles={{background:colors.greenAccent[700],color:colors.grey[100],p:2,":hover":{
        background:colors.greenAccent[600]
      }}} icon={<ArrowForwardIcon/>}/>
        </Box>
        </motion.Box>
        <motion.Box component='div'  display='flex' justifyContent={'flex-end'}
        initial={{opacity:0,x:'130%'}}
        animate={{opacity:1,x:'0'}}
        transition={{duration:3}}
        >
            <img src={images} alt="images" style={{backgroundColor:'transparent'}}/>
        </motion.Box>
    </Box>
  )
}

export default Hero

