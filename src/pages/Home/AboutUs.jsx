import React from 'react'
import image1 from '../../assets/boyGym.jpg'
import {Box,Typography} from '@mui/material'
import ButtonComp from '../../component/Button'
import { tokens } from '../../theme'
import { useTheme } from '@mui/material'
const AboutUs = () => {
    const theme=useTheme()
    const colors=tokens(theme.palette.mode)
  return (
<Box display='flex' justifyContent={'space-between'} alignItems={'center'} height={'60vh'} gap='3rem' paddingBottom='1rem'>
<Box display='flex' flexBasis={1}>
    <img src={image1} alt="images" style={{height:'50vh',width:'40vw',objectFit:'center'}}/>
</Box>
<Box display='flex' flexDirection={'column'}>
    <Typography variant='h2' sx={{fontWeight:'bold',paddingBottom:'1rem',fontSize:'3rem'}}>Story About Us</Typography>
    <Typography sx={{paddingBottom:'1rem'}}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos quis perferendis facere illo harum non laborum rerum 
        doloribus ducimus placeat ab distinctio nobis, itaque totam dicta molestias atque id odio? Blanditiis, earum saepe facere 
        neque perspiciatis omnis beatae velit numquam? Itaque saepe laboriosam temporibus aliquid commodi quisquam reprehenderit hic numquam!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos quis perferendis facere illo harum non laborum rerum 
        doloribus ducimus placeat ab distinctio nobis, itaque totam dicta molestias atque id odio? Blanditiis, earum saepe facere 
        neque perspiciatis omnis beatae velit numquam? Itaque saepe laboriosam temporibus aliquid commodi quisquam reprehenderit hic numquam!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos quis perferendis facere illo harum non laborum rerum 
        
        doloribus ducimus placeat ab distinctio nobis, itaque totam dicta molestias atque id odio? Blanditiis, earum saepe facere 
        neque perspiciatis omnis beatae velit numquam? Itaque saepe laboriosam temporibus aliquid commodi quisquam reprehenderit hic numquam!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos quis perferendis facere illo harum non laborum rerum 
        doloribus ducimus placeat ab distinctio nobis, itaque totam dicta molestias atque id odio? Blanditiis, earum saepe facere 
        neque perspiciatis omnis beatae velit numquam? Itaque saepe laboriosam temporibus aliquid commodi quisquam reprehenderit hic numquam!
    </Typography>
    <ButtonComp message='Read More' styles={{background:colors.greenAccent[700],color:colors.grey[100],width:'max-content',padding:'8px',':hover':{
        background:colors.greenAccent[600]
    }}}/>
</Box>
</Box>
)
}

export default AboutUs