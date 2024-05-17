import { Box,Typography } from '@mui/material'
import React from 'react'
import image1 from '../../assets/boyGym.jpg'
import Grid from '@mui/material/Grid';
import {motion} from 'framer-motion'

const Services = () => {
    const serviceList=[{
        id:1,
        image:image1,
        title:'Physco Training'
    },
{
    id:2,
    image:image1,
    title:'Self Defense'
},{
    id:3,
    image:image1,
    title:'Fitness Training'
},{
    id:4,
    image:image1,
    title:'Strength Training'
},{
    id:5,
    image:image1,
    title:'Advance Gym'
},{
    id:5,
    image:image1,
    tilte:'Cardio Training'
}]
  return (
<Box display='flex' justifyContent={'center'} flexDirection={'column'} alignItems="center" paddingY={'2rem'}>
    <motion.Box initial={{opacity:0,y:'40%'}} whileInView={{opacity:1,y:'0'}} transition={{duration:1}} viewport={{once:true}}> 
        <Typography  variant='h1' sx={{textTransform:'capitalize',fontWeight:'bold',textAlign:'center',paddingBottom:'1rem'}}>
            Our Services 
        </Typography>
        <Typography textAlign={'center'}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, dignissimos?s
        </Typography>
    </motion.Box>
    <motion.Box initial={{opacity:0,y:'40%'}} whileInView={{opacity:1,y:'0'}} transition={{duration:1}} viewport={{once:true}}>
    <Grid container spacing={2} zeroMinWidth overflow={'hidden'} margin={'4px'}>
        {serviceList?.map(item=>(
 <Grid  item md={3}>
<Box position='relative' overflow={'hidden'} sx={{'&:hover .hello':{opacity:1}}}>
           <Box component='img' src={item?.image} alt="image" style={{dispaly:'block',width:'100%',AspectRatio:1/1,objectFit:'center',objectPosition:'center'}} />
            <Box className='hello' sx={{position:'absolute' ,inset:0,backgroundColor:'rgba(40,200,200,0.3)',justifyContent:'center',display:'flex',alignItems:'center',opacity:0,transition:'all',transitionDuration:'150ms',transitionTimingFunction:'ease-in-out'}}>
    <Typography variant='h3'>{item?.title}
    </Typography>
    </Box>
    </Box>
</Grid>
        ))}
       
        
      </Grid>
      </motion.Box>
</Box>
)
}

export default Services