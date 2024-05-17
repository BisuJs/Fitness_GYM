import { Box,Stack } from '@mui/material'
import React,{useState,useEffect} from 'react'
import { IoIosArrowUp } from "react-icons/io";
import { tokens } from '../theme';
import {useTheme} from '@mui/material'
const ScrollToTop = () => {
    const theme=useTheme()
    const colors=tokens(theme.palette.mode)
    const [show,setShow]=useState(false)
    
    useEffect(()=>{
        function handleShow(){
            if(window.scrollY>300){
                setShow(true)
            }else{
                setShow(false)
            }
        }
        window.addEventListener('scroll',handleShow)
        return ()=>window.removeEventListener('scroll',handleShow)
    },[])
    const handleScrollToTop=(e)=>{
        window.scrollTo({
            top:'0',
            behavior:'smooth'
        })
    }
  return (
   
    <Box position='relative'>
<Box position='fixed' zIndex='50' bottom='10%' right='10%'>
    {show && 
    <Stack onClick={handleScrollToTop} sx={{border:`1px solid ${colors.primary[300]}`,backgroundColor:colors.primary[400],cursor:'pointer',width:'3rem',height:'3rem',borderRadius:'50%',display:'flex',justifyContent:'center',alignItems:'center'}}>
   <IoIosArrowUp/> 
   <IoIosArrowUp/>
   </Stack>}
</Box> 
    </Box>
  )
}

export default ScrollToTop