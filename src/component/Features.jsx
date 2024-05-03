import { Box,Typography } from '@mui/material'
import React from 'react'
import { GiWeightLiftingUp } from "react-icons/gi";
import icon1 from '../assets/1.svg'
import icon2 from '../assets/2.svg'
import icon3 from '../assets/3.svg'
import icon4 from '../assets/4.svg'
const Features = () => {
    
    const featuresItem=[{
        id:1,
        icon:icon1,
        title:'Weight Lifting',
        description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident maiores quos deserunt atque autem quas.'

    },{
        id:2,
        icon:icon2,
        title:'Specific Muscle',
        description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident maiores quos deserunt atque autem quas.'

    },
    {
        id:3,
        icon:icon3,
        title:'Flex Your Muscle',
        description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident maiores quos deserunt atque autem quas.'

    },{
        id:4,
        icon:icon4,
        title:'Cardio Excersie',
        description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident maiores quos deserunt atque autem quas.'

        
    }
]
  return (
    <Box display='flex' justifyContent={'center'} flexDirection={'column'} alignItems="center" paddingBottom='2rem'>
    <Box sx={{dispaly:'flex',justifyContent:'center',alignItems:'center'}}>
        <Typography variant="h1" sx={{textTransform:'capitalize',fontWeight:'bold',textAlign:'center',paddingBottom:'1rem'}}>
    Our Features
        </Typography>
        <Typography sx={{paddingTop:'0.5rem',width:'55%',mx:'auto',paddingBottom:'2rem'}}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia reprehenderit velit aperiam 
            odit asperiores necessitatibus saepe molestiae ipsam dicta eos.
        </Typography>
    </Box>
    <Box display='flex' justifyContent='space-between' alignItems='center'>
        {featuresItem?.map((item)=>(
<Box key={item?.id} textAlign={'center'} sx={{flex:'0 0 20%'}}> 
<img src={item.icon} alt="icon" />
<Typography variant='h4' sx={{textTransform:'uppercase',fontWeight:'bold',paddingY:'0.4rem'}}>{item?.title}</Typography>
<Typography> {item?.description}</Typography>
</Box>
        ))}
    </Box>
    </Box>
  )
}

export default Features