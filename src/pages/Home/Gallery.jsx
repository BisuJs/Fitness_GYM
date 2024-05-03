import React,{useState} from 'react'
import image from '../../assets/boyGym.jpg'
import {Box,Grid,Typography} from "@mui/material"
import { AspectRatio } from '@mui/icons-material'
const Gallery = () => {
//     const [direction, setDirection] = useState(null);

//   const handleMouseMove = (e) => {
//     const x = e.nativeEvent.offsetX;
//     const y = e.nativeEvent.offsetY;
// console.log(x,'x')
// console.log(y,'y')
//     const width = e.target.clientWidth;
//     const height = e.target.clientHeight;
// console.log(width,'width')
// console.log(height,'height')
//     const dx = (x / width) * 2 - 1;
//     const dy = (y / height) * 2 - 1;
// console.log(dx,'dx')
// console.log(dy,'dy')
//     if (Math.abs(dx) > Math.abs(dy)) {
//       setDirection(dx > 0 ? 'right' : 'left');
//     } else {
//       setDirection(dy > 0 ? 'down' : 'up');
//     }
//   };

//   const handleMouseLeave = () => {
//     setDirection(null);
//   };
    const imageGallery=[{
        id:3,
        image:image,
        tilte:'Body Fitness Gallery',
        subtitle:'Fitness, Body'
    },
    {
        id:4,
        image:image,
        tilte:'Body Fitness Gallery',
        subtitle:'Fitness, Body'
    },
    {
        id:5,
        image:image,
        tilte:'Body Fitness Gallery',
        subtitle:'Fitness, Body'
    },{
        id:6,
        image:image,
        tilte:'Body Fitness Gallery',
        subtitle:'Fitness, Body'
    }
]
  return (
    <Box>
<Grid container spacing={2} zeroMinWidth overflow={'hidden'} margin={'4px'}>
        {imageGallery?.map(item=>(
 <Grid item md={6} >
<Box position='relative' overflow={'hidden'} sx={{'&:hover .hello':{
  transform:'translateX(0%)'
    
}}}>
           <img src={item?.image} alt="image" style={{dispaly:'block',width:'100%',AspectRatio:1/1,objectFit:'center',objectPosition:'center'}} />
            <Box sx={{position:'absolute' ,inset:0,backgroundColor:'rgba(40,200,200,0.3)',transform:'translateX(-100%)',justifyContent:'center',display:'flex',alignItems:'center',transition:'all',transitionDuration:'150ms',transitionTimingFunction:'ease-in-out'}}>
    <Typography variant='h3'>Hello
    </Typography>
    </Box>
    </Box>
</Grid>
        ))}
       
        
      </Grid>
    </Box>

  )
}

export default Gallery