import { Box,Typography } from '@mui/material'
import React from 'react'
import { GiWeightLiftingUp } from "react-icons/gi";
import icon1 from '../../assets/bicycle.png'
import icon2 from '../../assets/body-building.png'
import icon3 from '../../assets/weight-lifting.png'
import icon4 from '../../assets/dumbbell.png'
import {useTheme} from '@mui/material';
import { tokens } from '../../theme';
const WhyChooseUs = () => {
    const theme=useTheme()
    const colors=tokens(theme.palette.mode)
    const featuresItem=[{
        id:1,
        icon:icon1,
        title:'Client',
        number:"10"

    },{
        id:2,
        icon:icon2,
        title:'Trainers',
        number:'12'

    },
    {
        id:3,
        icon:icon3,
        title:'Exprience',
        number:'23'

    },{
        id:4,
        icon:icon4,
        title:'Branch',
        number:'30'

        
    }
]
  return (
    <Box display='flex' justifyContent={'center'} flexDirection={'column'} alignItems="center" paddingBottom='2rem'>
    <Box sx={{dispaly:'flex',justifyContent:'center',alignItems:'center'}}>
        <Typography variant="h1" sx={{textTransform:'capitalize',fontWeight:'bold',textAlign:'center',paddingBottom:'1rem'}}>
    Why Choose Us
        </Typography>
        <Typography sx={{paddingTop:'0.5rem',width:'55%',mx:'auto',paddingBottom:'2rem'}}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia reprehenderit velit aperiam 
            odit asperiores necessitatibus saepe molestiae ipsam dicta eos.
        </Typography>
    </Box>
    <Box display='flex' justifyContent='space-between' width='80%' paddingY='4rem' >
        {featuresItem?.map((item)=>(
<Box key={item?.id} display='flex' flexDirection='column' justifyContent={'center'} alignItems={'center'} sx={{}}> 
<Box width='6rem' height='6rem' padding='1rem' border={`1px solid ${colors.primary[400]}`} backgroundColor={colors.greenAccent[500]} borderRadius='50%'>
<Box component='img' src={item.icon} alt="icon" width='100%' height='100%'/>
</Box>
<Typography variant='h4'sx={{textTransform:'uppercase',fontWeight:'bold',paddingTop:'0.4rem'}}> {item?.number}</Typography>

<Typography variant='h4' sx={{textTransform:'uppercase',fontWeight:'bold',paddingY:'0.4rem'}}>{item?.title}</Typography>
</Box>
        ))}
    </Box>
    </Box>
  )
}

export default WhyChooseUs