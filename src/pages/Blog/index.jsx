import React,{useState} from 'react'
import {Box,Typography, useTheme,styled,Paper,InputBase,List,ListItem,ListItemText} from '@mui/material'
import HeaderSection from '../../component/HeaderSection'
import image1 from '../../assets/boyGym.jpg'
import CardComp from '../../component/Card'
import { tokens } from '../../theme'
import Pagination from '../../component/Pagination'
import SearchIcon from '@mui/icons-material/Search';
import FolderIcon from '@mui/icons-material/Folder';
import image from '../../assets/gymGirl.jpg'

const Blog = () => {
  const theme=useTheme();
  const colors=tokens(theme.palette.mode)
  const [page,setPage]=useState(0)
  const tagList=[{
    id:1,
    name:'Fit'
},{
    id:2,
    name:'gym',

},{
    id:3,
    name:'yoga'
},{
    id:4,
    name:'strong'
},{
    id:5,
    name:'training'
},{
    id:6,
    name:'tips'
}]
  const handlePageChange=(v)=>{
setPage(v)
  }
  const Item = styled(Paper)(() => ({
    textAlign: 'center',
    // color: theme.palette.text.secondary,
    width:'5rem',
    // paddingLeft:'12px',
    // paddingRight:'12px',
    height: 60,
    lineHeight: '60px',
  }));
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    padding:4,
    borderRadius:4,
    backgroundColor: colors.primary[400],
    '&:hover': {
      backgroundColor: colors.primary[300],
    },
    marginLeft: 0,
    width: '100%',
   
  }));
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    paddingLeft: 4,
    paddingBottom:2,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: 8,
      paddingLeft: `1.5rem`,
      
    },
  }));
 const borderRight={
    content:'""',
        borderRight:`2px solid ${colors.greenAccent[400]}`,
        position:'relative',
        left:'8px'
 }
 


  
  return (
    <Box>
    <HeaderSection title='Service'description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, optio recusandae ad officiis perspiciatis odit?'/>
    <Box display='flex' width='90vw' margin='auto' paddingBlock='2rem'>
    <Box display='flex' flexDirection='column' width='20%' rowGap='1rem' order={2} padding='1rem'>
    <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box>
            <Typography variant='h3'>Categories</Typography>
            {Array.from({length:5},(_,i)=>i).map(item=>(
                <List sx={{width:'100%',padding:0,margin:0,cursor:'pointer',':hover':{
                  color:colors.greenAccent[400]
                }}}>
              
              <ListItem
                secondaryAction={
                  <Typography sx={{fontSize:'0.9rem',fontWeight:'600'}}>4</Typography>
                }
                // sx={{paddingBottom:0,margin:0}}
              >
                    <FolderIcon sx={{paddingRight:'4px'}}/>
                <ListItemText
                
                  primary={<Typography sx={{fontSize:'0.9rem',fontWeight:'600'}}>Hello</Typography>}
                  // sx={{fontSize:'2rem',fontWeight:'800',backgroundColor:'red'}}
                  // secondary={secondary ? 'Secondary text' : null}
                />
              </ListItem>
            
          </List>
            ))}
            
          </Box>
          <Box>
            <Typography variant='h3' paddingBottom='1rem'>Recent Posts</Typography>
            <Box display='flex' flexDirection='column' gap='1rem' width='100%'>
            {Array.from({length:4},(_,i)=>i).map(v=>(
                <CardComp sx={{display:'flex', width:'100%'}}>
<CardComp.Media image={image} component={'img'} height='100px' alt={'image'} sx={{objectFit:'cover',objectPosition:'center',width:'100px'}}/>
<CardComp.Content>
    <Typography>June 05 2024</Typography>
    <Typography variant='h4'>Hello its me Bishal</Typography>
</CardComp.Content>
            </CardComp>
            ))}
            </Box>
          </Box>
          <Box width='100%'>
            <Typography variant='h3' paddingBottom='1rem'>Tags</Typography>
<Box display='flex' flexWrap='wrap' gap='1rem' spacing={2}> 
    {tagList?.map((item)=>(
    <Item elevation={12} key={item.id}>{item.name}</Item>

    ))}
</Box>
          </Box>

    </Box>
    <Box component='div' width='80%' height='max-content' mx='auto' display='grid' gridTemplateColumns={'repeat(3,1fr)'} gap='1rem' padding='1rem'>
      {Array.from({length:5},(_,i)=>i).map(v=>(
        <CardComp sx={{backgroundColor:colors.primary[500],cursor:'pointer'}}>
    <CardComp.Media component="img" maxHeight='75%' image={image1} alt={'image'} sx={{ overflow:'hidden', ':hover':{
      transform:'scale(1.05)'
    }}}/>

    <CardComp.Content>

        <Typography>February 14,2019</Typography>
        <Typography variant='h4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, ea!</Typography>
    </CardComp.Content>
</CardComp>
      ))}


    </Box>
    </Box>
    <Box>
      <Pagination total={60} onPageChange={handlePageChange}/>
    </Box>
    </Box>
  )
}

export default Blog