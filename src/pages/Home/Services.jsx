import { Box,Typography } from '@mui/material'
import React from 'react'
import image1 from '../../assets/boyGym.jpg'
import Grid from '@mui/material/Grid';
const Services = () => {
    const serviceList=[{
        id:1,
        image:image1,
        title:'Fitness'
    },
{
    id:2,
    image:image1,
    title:'Cross Fit Training'
},{
    id:3,
    image:image1,
    title:'Dynamic'
},{
    id:4,
    image:image1,
    title:'Health'
}]
  return (
<Box height='full' width='full'>
    <Box>
        <Typography variant='h1' textAlign={'center'}>
            Our Services
        </Typography>
        <Typography textAlign={'center'}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, dignissimos?s
        </Typography>
    </Box>
    <Grid container spacing={2} zeroMinWidth overflow={'hidden'} margin={'4px'}>
        {serviceList?.map(item=>(
 <Grid item md={6}>
<Box position='relative' overflow={'hidden'} sx={{'&:hover .hello':{
    opacity:1
    
    
}}}>
           <img src={item?.image} alt="image" style={{dispaly:'block',width:'100%',AspectRatio:1/1,objectFit:'center',objectPosition:'center'}} />
            <Box className='hello' sx={{position:'absolute' ,inset:0,backgroundColor:'rgba(40,200,200,0.3)',justifyContent:'center',display:'flex',alignItems:'center',opacity:0,transition:'all',transitionDuration:'150ms',transitionTimingFunction:'ease-in-out'}}>
    <Typography variant='h3'>{item?.title}
    </Typography>
    </Box>
    </Box>
</Grid>
        ))}
       
        
      </Grid>
</Box>
)
}

export default Services