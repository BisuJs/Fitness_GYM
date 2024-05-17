import React from 'react'
import {Box,Typography,List,ListItem,ListItemText,TextField,Stack} from '@mui/material'
import {Link} from '@mui/material'
import {useTheme} from '@mui/material'
import { tokens } from '../../theme'
import SendIcon from '@mui/icons-material/Send';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
const Footer = ({contactRef}) => {
  const theme=useTheme();
  const color=tokens(theme.palette.mode)
  const footerList=[{
    id:1,
    title:'About Us',
    to:'/about-us'
  },
{
  id:2,
  title:'Contact Us',
  to:'/contact-us'
},
{
  id:3,
  title:'Pricing',
  to:'/pricing'
},
{id:4,
  title:'Blog Post',
  to:'/blog'
},
{
  id:5,
  title:'FAQs',
  to:'/faq'
},{
  id:6,
  title:'Instructors',
  to:'/instructors'
}
]
  return (
<Box ref={contactRef} id='contact-us' width='full' height='full' backgroundColor={color.primary[400]} paddingTop={'2rem'} >
  <Box width="80vw" marginX={'auto'} display='flex' justifyContent={'space-between'} gap={'9rem'} flexBasis={1} paddingBottom="2rem">
<Box flex={1} display='flex' alignItems={'center'} flexDirection={'column'} justifyContent={'center'} gap={'0.5rem'}>
<Box component='div' >
        <Link href="/" sx={{textDecoration:'none'}}>
        <Typography variant='h1' sx={{fontSize:'2rem',fontWeight:'bold',textTransform:'uppercase',letterSpacing:'0.1rem',display:'flex',color:theme.palette.neutral.dark}}>
          Fit
          <Typography variant='h1' sx={{fontSize:'2rem',fontWeight:'bold',textTransform:'uppercase', letterSpacing:'0.1rem',color:theme.palette.secondary.main }}>ness</Typography>
          </Typography>
          </Link>
      </Box>
      <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quisquam dolor, eveniet cupiditate quod facilis officia nam alias veritatis. Inventore.</Typography>
</Box>
<Box display='flex' justifyContent={'space-between'}>
<Box flex={1}>
<Typography variant='h4'>Useful Links</Typography>
<List sx={{}}>
      {footerList.map((value) => {

        return (
          <ListItem
            key={value}
            
            disablePadding
          >
           
              <ListItemText primary={value?.title} />
          </ListItem>
        );
      })}
    </List>
</Box>
<Box flex={1} display='flex' flexDirection={'column'} gap={'0.5rem'}>
  <Typography variant='h4'>Contact Info</Typography>
  <Box>
    <Typography>Address</Typography>
    <Typography>Kathmandu</Typography>
  </Box>
<Box>
  <Typography>Phone</Typography>
  <Typography>+97987478477</Typography>
</Box>
<Box>
  <Typography>Email</Typography>
  <Typography>example@gamil.com</Typography>
</Box>
</Box>
<Box flex={1} display='flex' flexDirection={'column'} gap={'0.5rem'}>
  <Typography variant='h4'>News Letter</Typography>
  <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, soluta nam? Pariatur incidunt excepturi illo!</Typography>
  <Box display='flex' alignItems='center'>
  <TextField id="email" label="Email" variant="outlined" size='small'InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton>
              <SendIcon />
            </IconButton>
          </InputAdornment>
        ),
      }} />
  </Box>
  <Stack direction={'row'} spacing={2}>
    <Link href='' sx={{color:'white'}}><FaFacebook fontSize='20px'/></Link>
    <Link href="" sx={{color:'white'}}><FaInstagram fontSize='20px'/></Link>
    <Link href="" sx={{color:'white'}}><FaTwitter fontSize='20px'/></Link>
    </Stack>
</Box>
</Box>
</Box>
<Box paddingY='1rem' backgroundColor={color.primary[500]}>
  <Typography textAlign={'center'} sx={{fontSize:'1rem'}}><span style={{fontSize:'1rem'}}>&copy; </span>
   2024 made with  <span style={{color:color.greenAccent[500]}}>&hearts;</span> by Bisu Gaihre</Typography>
</Box>
</Box>
  )
}

export default Footer