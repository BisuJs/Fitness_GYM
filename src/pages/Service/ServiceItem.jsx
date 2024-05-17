import React,{useState} from 'react'
import {Box,List,ListItem,ListItemText,Paper,Typography,Stack,Link} from '@mui/material'
import HeaderSection from '../../component/HeaderSection'
import image1 from '../../assets/boyGym.jpg'
import {useTheme} from '@mui/material'
import { tokens } from '../../theme'
import { TbArrowRightCircle } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";

import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
const ServiceItem = () => {
const theme=useTheme()
const colors=tokens(theme.palette.mode)
const [active,setActive]=useState(false);
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
        title:'Cardio Training'
    }]
  return (
    <Box>
    <HeaderSection title='Service'description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, optio recusandae ad officiis perspiciatis odit?'/>
    <Box component='div' width='60vw' mx='auto' display='flex' padding='2rem' >
        <Box flexBasis={'30%'} display='flex' flexDirection={'column'} rowGap={'4rem'}>
    <List sx={{ margin:'0',padding:'0',borderRadius:'20px'}}>
      {serviceList.map((value) => {

        return (
          <ListItem
            key={value}
            
           sx={{backgroundColor:active===value.title ? colors.primary[400]:colors.primary[600],":nth-last-child(1)":{
            border:'none',
           },borderBottom: `1px solid ${colors.greenAccent[400]}`,cursor:'pointer',padding:'8px',transition:'all',duration:'150ms',transitionTimingFunction:'ease-in-out',':hover':{
            backgroundColor:colors.primary[400]
           }}}
           onClick={()=>setActive(value.title)}
            disablePadding
          >
               
              <ListItemText  primary={value.title} sx={{textAlign:'center',color:colors.grey[100]}} />
          </ListItem>
        );
      })}
    </List>
    <Box sx={{bgcolor:colors.primary[600],display:'flex',flexDirection:'column',alignItems:'center',padding:'2rem'}}>
      <Typography variant='h4' sx={{}}>Contact Us </Typography>
      <Box display='flex' flexDirection='column'rowGap='0.5rem' justifyContent={'center'} mx='auto' paddingY={'1rem'}>
      <Typography sx={{display:'flex', columnGap:'2rem'}}><TbArrowRightCircle color={colors.greenAccent[500]} fontSize='1.5rem'/>get in touch</Typography>

      <Box display='flex' columnGap='2rem'>
        <Typography><CiLocationOn color={colors.greenAccent[500]} fontSize='1.8rem' /></Typography>
        <Typography>Kathmandu</Typography>
      </Box>
      <Box display='flex' columnGap='2rem'>
        <Typography><MdOutlineEmail color={colors.greenAccent[500]} fontSize='1.8rem'/></Typography>
        <Typography>example@gmail.com</Typography>
      </Box>
      <Box display='flex' columnGap='2rem'>
        <Typography><MdOutlinePhone color={colors.greenAccent[500]} fontSize='1.8rem'/></Typography>
        <Typography>+977 9833454533</Typography>
      </Box>
      </Box>
      <Stack direction={'row'} spacing={2}>
    <Link href='' sx={{color:'white'}}><FaFacebook fontSize='1.8rem'/></Link>
    <Link href="" sx={{color:'white'}}><FaInstagram fontSize='1.8rem'/></Link>
    <Link href="" sx={{color:'white'}}><FaTwitter fontSize='1.8rem'/></Link>
    <Link href="" sx={{color:'white'}}><FaTwitter fontSize='1.8rem'/></Link>

    </Stack>
    </Box>
    </Box>
    <Box flexBasis={'70%'}>
        <Box component='img' width='100%' aspectRatio='1/1' objectFit='cover' objectPosition='cover' src={image1} alt={'images'}/>
        <Typography sx={{color:colors.grey[200]}}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae numquam dolorum nisi, ipsa repellat excepturi delectus esse, natus magni quibusdam amet, veritatis sunt voluptas aperiam quisquam. Sed repudiandae fuga dolor necessitatibus aperiam numquam! Facere hic modi, reiciendis, nihil sed quae sequi sapiente minus dicta officia voluptatibus nesciunt iure optio. Maxime!
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360,display:'grid',gridTemplateColumns:'repeat(2,1fr)' }}>
      {[1,2,3,4,5,6].map((value) => {

        return (
          <ListItem
            key={value}
           
            disablePadding
          >
              <ListItemText  primary={value} sx={{color:colors.grey[100]}}/>
          </ListItem>
        );
      })}
    </List>
    <Typography variant='h3' sx={{color:colors.grey[100],paddingBottom:'0.5rem'}}>Class Scheldule</Typography>
    <Box sx={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',rowGap:'1rem'}}>
    {[1,2,3,4,5,6].map(value=>(
        <Box>
          <Paper sx={{backgroundColor:colors.primary[600],width:'max-content',padding:'1rem'}} elevation={4}>
        <Typography sx={{fontSize:'1rem',fontWeight:'bold'}}>Monday</Typography>
        <Typography> 8:00Am - 9:00AM </Typography>
        </Paper>
    </Box>
    ))}
    </Box>
    <Typography> Our Trainers </Typography>
    
    </Box>
    </Box>
    </Box>
  )
}

export default ServiceItem