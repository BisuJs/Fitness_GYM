import { Box, Typography, Grid, Link, Stack, Item } from "@mui/material";
import React, { useState, useEffect,useMemo } from "react";
import image from "../../assets/boyGym.jpg";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import {useTheme} from "@mui/material";
import {tokens} from '../../theme'

const OurTeam = () => {
  const theme=useTheme();
  const color=tokens(theme.palette.mode)
  const teamMember = [
    {
      id: 11,
      name: "Jhon Doe",
      position: "Men Trainer",
      profile: image,
      social: { facebook: "", twitter: "", instagram: "" },
    },
    {
      id: 12,
      name: "Jessy heroine",
      position: "Women Trainer",
      profile: image,
      social: { facebook: "", twitter: "", instagram: "" },
    },
    {
      id: 13,
      name: "Roman Regins",
      position: "Men Trainer",
      profile: image,
      social: { facebook: "", twitter: "", instagram: "" },
    },
    {
      id: 14,
      name: "Randy Otan",
      position: "Men Trainer",
      profile: image,
      social: { facebook: "", twitter: "", instagram: "" },
    },
    {
      id: 15,
      name: "Lena Doe",
      position: "Women Trainer",
      profile: image,
      social: { facebook: "", twitter: "", instagram: "" },
    },
  ];
  const [team, setTeam] = useState(teamMember);
  const [currentPosition, setCurrentPosition] = useState(0);

  // Function to scroll the carousel to the next position
  const scrollNext = () => {
    const nextPosition = currentPosition + 1;
    setCurrentPosition(nextPosition);
    // const popItem=teamMember.pop()
    // team.push(popItem)
    
    if (nextPosition >= teamMember.length - 3) {
      setTeam((prevItems) => [...prevItems, ...teamMember]);
    }
  };

  const startAutoScroll = () => {
    const intervalId = setInterval(() => {
      scrollNext();
    },3000); 
    return intervalId;
  };

  useMemo(() => {
    const intervalId = startAutoScroll();

    return () => {
      clearInterval(intervalId);
    };
  },[currentPosition]); 

  return (
    <Box height="full" width="full" py='2rem'>
      <Box paddingBottom={'1rem'}>
        <Typography
          variant="h1"
          textAlign={"center"}
          sx={{ transform: "capitalize",paddingBottom:'1rem' }}
        >
          Our Trainers
        </Typography>
        <Typography textAlign={"center"}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro,
          dignissimos?s
        </Typography>
      </Box>
     
      <Box
        overflow={"hidden"}
        // margin={"40px"}
        width={'75vw'}
        sx={{ display: "flex", gap: "" }}
        className="outerCarousel"
      >
        {team?.map((team) => (
          <Box
            className="innerCarousel"
            style={{
              transform: `translateX(-${
                (currentPosition) *100
              }%)`,
              transition: "transform 2s ease-in-out",
            }}
          >
            <Box
              width={"25vw"}
              position="relative"
              overflow={"hidden"}
              sx={{
                "&:hover .hello": {
                  opacity: 1,
                },
              }}
            >
              <Box
                component="img"
                src={team?.profile}
                alt="image"
                sx={{
                  dispaly: "block",
                  width: "100%",
                  AspectRatio: 1 / 1,
                  objectFit: "center",
                  objectPosition: "center",
                }}
              />
              <Box
                className="hello"
                sx={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "rgba(150,150,150,0.3)",
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                  opacity: 0,
                  transition: "all",
                  transitionDuration: "150ms",
                  transitionTimingFunction: "ease-in-out",
                }}
              >
                <Stack direction="row" spacing={2}>
                  <Link
                    href={team?.social?.facebook}
                    sx={{
                      width: "2.5rem",
                      height: "2.5rem",
                     
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color:color.grey[100],
                      border: "1px solid white",
                      borderRadius: "50%",
                      ':hover':{
                        backgroundColor:color.greenAccent[500],
                      }
                    }}
                  >
                    <FaFacebookF />
                  </Link>
                  <Link
                    href={team?.social?.twitter}
                    sx={{
                      width: "2.5rem",
                      height: "2.5rem",
                      color:color.grey[100],
                      border: "1px solid white",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      
                      borderRadius: "50%",
                      ':hover':{
                        backgroundColor:color.greenAccent[500],
                      }
                    }}
                  >
                    <FaTwitter />
                  </Link>
                  <Link
                    href={team?.social?.instagram}
                    sx={{
                      width: "2.5rem",
                      height: "2.5rem",
                      color:color.grey[100],
                      border: "1px solid white",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "50%",
                      ':hover':{
                        backgroundColor:color.greenAccent[500],
                      }
                    }}
                  >
                    <FaInstagram />
                  </Link>
                </Stack>
              </Box>
            </Box>
            <Typography variant="h3">{team?.name}</Typography>
            <Typography> {team?.position}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default OurTeam;
