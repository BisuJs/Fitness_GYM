import React ,{useState} from 'react'
import HeaderSection from '../../component/HeaderSection'
import { Box,Paper,styled,Stack,Typography,InputBase,List,ListItem,ListItemAvatar,ListItemText,IconButton,Avatar,Container } from '@mui/material'
import image from '../../assets/gymGirl.jpg'
import DeleteIcon from '@mui/icons-material/Delete';
import FolderIcon from '@mui/icons-material/Folder';

import ReplyComment from '../../component/ReplyComment'
import SearchIcon from '@mui/icons-material/Search';
import {useTheme} from '@mui/material';
import { tokens } from '../../theme'
import CardComp from '../../component/Card';
const SingleBlog = () => {
  // const [showReply,setShowReply]=useState(false);

    // const tagList=[{
    //     id:1,
    //     name:'Fit'
    // },{
    //     id:2,
    //     name:'gym',

    // },{
    //     id:3,
    //     name:'yoga'
    // },{
    //     id:4,
    //     name:'strong'
    // },{
    //     id:5,
    //     name:'training'
    // },{
    //     id:6,
    //     name:'tips'
    // }]
    const theme=useTheme();
    const colors=tokens(theme.palette.mode)
    const Item = styled(Paper)(() => ({
        textAlign: 'center',
        // color: theme.palette.text.secondary,
        width:'5rem',
        // paddingLeft:'12px',
        // paddingRight:'12px',
        height: 60,
        lineHeight: '60px',
      }));
      // const Search = styled('div')(({ theme }) => ({
      //   position: 'relative',
      //   padding:4,
      //   borderRadius:4,
      //   backgroundColor: colors.primary[400],
      //   '&:hover': {
      //     backgroundColor: colors.primary[300],
      //   },
      //   marginLeft: 0,
      //   width: '100%',
       
      // }));
      // const SearchIconWrapper = styled('div')(({ theme }) => ({
      //   paddingLeft: 4,
      //   paddingBottom:2,
      //   height: '100%',
      //   position: 'absolute',
      //   pointerEvents: 'none',
      //   display: 'flex',
      //   alignItems: 'center',
      //   justifyContent: 'center',
      // }));
      
      // const StyledInputBase = styled(InputBase)(({ theme }) => ({
      //   color: 'inherit',
      //   width: '100%',
      //   '& .MuiInputBase-input': {
      //     padding: 8,
      //     paddingLeft: `1.5rem`,
          
      //   },
      // }));
     const borderRight={
        content:'""',
            borderRight:`2px solid ${colors.greenAccent[400]}`,
            position:'relative',
            left:'8px'
     }
     const comments=[{
      id:1,
      name:'jhon doe',
      description:'Hello its me lessy do you wanna get something',
      innerComments:[{
        id:2,
        name:'lessy ',
        description:'Hello its me lessy do you wanna get something'
      },
    {
      id:3,
      name:'crazy',
      description:'Hello its me crazy do you wanna get something!'
    }]
     },
     {
      id:1,
      name:'jhon doe',
      description:'Hello its me lessy do you wanna get something',
      innerComments:[{
        id:2,
        name:'lessy ',
        description:'Hello its me lessy do you wanna get something'
      },
    {
      id:3,
      name:'crazy',
      description:'Hello its me crazy do you wanna get something!'
    }]
     }]
  const CommentSection=({src,comment,name,date,outsideStyle={}})=>{
  const [reply,setReply]=useState(false);
return(
  <Box sx={outsideStyle} component='div' width='30vw'>
  <Box display='flex' gap={'1rem'} alignItems='center' paddingBlock={'1rem'}>
  <Avatar alt="Remy Sharp" src={src}  />
  <Box width='100%' >
    <Typography sx={{color:colors.grey[200]}}>{comment}</Typography>
    <Box display='flex' justifyContent={'space-between'} alignItems='center' paddingTop='0.25rem'>
      <Typography sx={{fontSize:'1rem',textTransform:'uppercase',fontWeight:'500',fontStyle:'italic',color:colors.grey[100],cursor:'pointer',':hover':{
       color:colors.greenAccent[400]
      }}}>{name}</Typography>
      <Typography sx={{color:colors.grey[300]}}>{date}</Typography>
      <Typography sx={{color:colors.grey[100],textTransform:'uppercase',cursor:'pointer',':hover':{
       color:colors.greenAccent[400]
      }}} onClick={()=>setReply(prev=>!prev)}>Reply</Typography>
  
    </Box>
  
  </Box>
  
  </Box>
  {reply && <ReplyComment title={'Reply a Comment'}/>}
  
  
  </Box> 



      )}
  const ReplySection=({v})=>{
        const [showReply,setShowReply]=useState(false);
        return(
          <>
<Typography sx={{paddingLeft:'2rem',color:colors.grey[100],cursor:'pointer'}} onClick={()=>setShowReply(!showReply)}>Show replies</Typography>
  {v?.innerComments && v.innerComments?.map((inner)=>(
          
        <CommentSection key={inner.id} src={'/static/images/avatar/1.jpg'} comment={inner.description} date='December 20 ,2023' name={inner.name} outsideStyle={{paddingLeft:'2rem',display:!showReply?'none':'block'}}/>
      
      ))}
      </>
        )
      }
        
      
  return (
    <Box>
    <HeaderSection title={'Hello its me bishal'}/>
    <Box display='flex' width='60vw' marginX='auto' columnGap={'2rem'} paddingBlock='2rem'>
    <Box display='flex' flexDirection='column'>
        <Box src={image} component='img' alt={'image'} aspectRation='1/1' height='50vh' width='100%' borderRadius={'10px'}></Box>
        <Stack sx={{textTransform:'uppercase',paddingBlock:'8px'}}  direction={'row'} spacing={2}>
        <Typography  sx={{'&:after':borderRight}}>
            May 05 ,2024
</Typography>
<Typography sx={{'&:after':borderRight}}>Fat Loss</Typography>
<Typography>4 Comments</Typography>
        </Stack>
        
        <Typography variant='h3' sx={{paddingBottom:'0.5rem'}}>Hello Its me Bishal.</Typography>
        <Typography sx={{color:colors.grey[100]}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore excepturi tempore alias repellat eligendi tenetur
             molestiae ratione porro odio sapiente veritatis similique odit natus quae, accusantium deleniti enim ex obcaecati asperiores nobis. 
             Velit nostrum iusto officia consequuntur fugit voluptates. Labore incidunt quod enim ex, dicta voluptatibus accusamus facere eaque, quos 
             culpa harum consequatur, provident recusandae libero. Possimus 
            corporis id cupiditate suscipit quam sint fuga, optio eius, expedita ratione dolores labore accusamus fugit doloremque voluptatum corrupti beatae 
            odio laboriosam inventore itaque. Quae consequatur exercitationem et reprehenderit nesciunt laboriosam eius dignissimos earum ea sequi, 
            repellendus magnam excepturi minus ad iure? Quisquam, porro.</Typography>
            <Box display='flex' justifyContent={'space-between'} paddingTop='1rem'>
            <Stack direction='row' spacing={2}>
                <Item elevation={12}>Strong</Item>
                <Item elevation={12}>Training</Item>
                <Item elevation={12}>Yoga</Item>
            </Stack>
            <Stack direction='row' spacing={2}>
                <Item elevation={12}>Facebook</Item>
                <Item elevation={12}>Instagram</Item>
                <Item elevation={12}>Youtube</Item>
                <Item elevation={12}>Twitter</Item>
            </Stack>
            </Box>
            <Box component='div' paddingBlock='1rem'>
                <Typography variant='h4'>05 Comments</Typography>
                {comments?.map(v=>(
                  <Box>
                  <CommentSection key={v.id} src={'/static/images/avatar/1.jpg'} comment={v.description} date='December 20 ,2023' name={v.name}/>
                  
                {v?.innerComments && <ReplySection v={v}/>}

                  </Box>
                ))}
               


            </Box>
            <ReplyComment title={'Leave a Comment'}/>
    </Box>
    {/* <Box display='flex' flexDirection='column' width='30%' rowGap='1rem'>
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

    </Box> */}
    </Box>
    </Box>
  )
}

export default SingleBlog