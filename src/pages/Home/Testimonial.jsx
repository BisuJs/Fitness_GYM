import { Box, Typography,Button,Stack} from "@mui/material";
import React, { useState, useEffect } from "react";
import image from "../../assets/boyGym.jpg";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import {useTheme} from "@mui/material";
import {tokens} from '../../theme'
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { FaStar } from "react-icons/fa";
import { Padding } from "@mui/icons-material";



const Testimonial = () => {
  const theme=useTheme();
  const color=tokens(theme.palette.mode)
  const testimonialList = [
    {
      id: 111,
      name: "Jhon Doe",
      profile: image,
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae molestiae doloribus pariatur voluptatem numquam velit sapiente maxime deserunt magni, vitae iste enim dolorem sint totam ab eos debitis voluptates minus.'
    },
    {
      id: 121,
      name: "Jessy heroine",
      profile: image,
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae molestiae doloribus pariatur voluptatem numquam velit sapiente maxime deserunt magni, vitae iste enim dolorem sint totam ab eos debitis voluptates minus.'

    },
    {
      id: 131,
      name: "Roman Regins",
      profile: image,
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae molestiae doloribus pariatur voluptatem numquam velit sapiente maxime deserunt magni, vitae iste enim dolorem sint totam ab eos debitis voluptates minus.'

    },
    {
      id: 141,
      name: "Randy Otan",
      profile: image,
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae molestiae doloribus pariatur voluptatem numquam velit sapiente maxime deserunt magni, vitae iste enim dolorem sint totam ab eos debitis voluptates minus.'

    },
    {
      id: 151,
      name: "Lena Doe",
      profile: image,
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae molestiae doloribus pariatur voluptatem numquam velit sapiente maxime deserunt magni, vitae iste enim dolorem sint totam ab eos debitis voluptates minus.'

    },
  ];
  const [team, setTeam] = useState(testimonialList);
  const[active,setActive]=useState(false)
  {console.log(active,'active')}
  let [currentPosition, setCurrentPosition] = useState(0);

  const handlePrev = () => {
    setCurrentPosition(currentPosition<=0?0:currentPosition-1);
  };
const handleNext=()=>{
  setCurrentPosition(currentPosition>=testimonialList.length-1?testimonialList.length-3:currentPosition+1)
console.log(currentPosition,'next')
}

  // const startAutoScroll = () => {
  //   const intervalId = setInterval(() => {
  //     // {console.log(currentPosition,testimonialList.length)}
  //     {currentPosition<=testimonialList.length-2?handleNext():handlePrev()}
  //     // handleNext()
  //   },3000); 
  //   return intervalId;
  // };

  // console.log(team);
  // useEffect(() => {
  //   const intervalId = startAutoScroll();

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // },[currentPosition]); 

  return (
    <Box height="full" width="full" py='2rem'>
      <Box paddingBottom={'1rem'}>
        <Typography
          variant="h1"
          textAlign={"center"}
          sx={{ transform: "capitalize",paddingBottom:'1rem' }}
        >
          Our Customers Views
        </Typography>
        
      </Box>
     
      <Box
      position='relative'
        overflow={"hidden"}
        // margin={"40px"}
        width={'80vw'}
        sx={{ display: "flex", gap: "" }}
      >
       <Box component="button" onClick={handlePrev} disabled={currentPosition===0?true:false} style={{width:'2rem',cursor:'pointer',height:'2rem',position:'absolute',zIndex:'2',top:'50%',left:'',border:'1px solid white',borderRadius:'50%'}}>
          <GrFormPrevious/></Box>
        <Box component='button' onClick={handleNext} disabled={currentPosition===testimonialList?.length-3?true:false} style={{width:'2rem',cursor:'pointer',height:'2rem',position:'absolute',zIndex:'2',top:'50%',right:'0%',border:'1px solid white',borderRadius:'50%'}}><MdNavigateNext/></Box>
        <Box marginLeft='0.5rem'display={'flex'} justifyContent={'center'} alignItems={'center'} gap='2vw'>
        {team?.map((team) => (
          <Box
          key={team?.id}
          width={"25vw"}
            style={{
              transform: `translateX(-${
                (currentPosition) *107
              }%)`,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              boxShadow: '0 0 40px rgba(8, 7, 16, 0.6)',
              backdropFilter: 'blur(11.8px)',
              webkitBackdropFilter: 'blur(11.8px)',
              border: '2px solid rgba(255, 255, 255, 0.1)',
              transition: "transform 2s ease-in-out",
              display:'flex' ,justifyContent:'center', alignItems:'center',
              flexDirection:'column',
              padding:'1rem',
              gap:'0.5rem'
            }}
          >
           
              <Box
                component="img"
                src={team?.profile}
                alt="image"
                sx={{
                  dispaly: "block",
                  width: "6rem",
                  height:'6rem',
                  AspectRatio: 1 / 1,
                  objectFit: "center",
                  objectPosition: "center",
                  borderRadius:'50%'
                }}
              />
             
            <Typography variant="h3">{team?.name}</Typography>
        <Stack direction='row' spacing={0.5}>
            {Array.from({length:5},(v,i)=>i).map(item=>(
                    
               <FaStar style={{color:color?.greenAccent[400],fontSize:'1rem',cursor:'pointer'}} onClick={()=>console.log('hello')}/>
            ))}
            </Stack>
            
            <Typography paddingX={'1rem'}> {team?.description}</Typography>

          </Box>
        ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonial;
