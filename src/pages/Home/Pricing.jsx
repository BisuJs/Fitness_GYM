import React from 'react'
import {Box,Typography,List,ListItem,ListItemText,Card} from '@mui/material';
import CardComp from '../../component/Card';
import ButtonComp from '../../component/Button';
import {useTheme }from '@mui/material';
import { tokens } from '../../theme';
import {motion} from 'framer-motion'
const Pricing = () => {
    const theme=useTheme();
    const color=tokens(theme.palette.mode)
    const priceListing=[{
        id:1,
        title:'Basic',
        price:'15',
        list:[{
            duration:12,
            personalTrainer:0,
            amountOfPeople:1,
            numberOfVisits:'unlimited'
        }]
        
    },
{
    id:2,
    title:'Standard',
    price:'30',
    list:[{
        duration:12,
        personalTrainer:1,
        amountOfPeople:1,
        numberOfVisits:'unlimited'
    }]
   

},
{
    id:3,
    title:'Premium',
    price:'45',
    list:[{
        duration:12,
        personalTrainer:1,
        amoutOfPeople:1,
        numberOfVisits:'unlimited'
    }]
    
}
]
    
  return (
    <Box display='flex' justifyContent={'center'} flexDirection={'column'} alignItems="center" paddingY={'2rem'} viewport={{once:true}}>
    <motion.Box initial={{opacity:0,y:'40%'}} whileInView={{opacity:1,y:'0'}} transition={{duration:1}} viewport={{once:true}} sx={{dispaly:'flex',justifyContent:'center',alignItems:'center'}}>
        <Typography variant="h1" sx={{textTransform:'capitalize',fontWeight:'bold',textAlign:'center',paddingBottom:'1rem'}}>
    Pricing Plan
        </Typography>
        <Typography sx={{paddingTop:'0.5rem',width:'55%',mx:'auto',paddingBottom:'2rem'}}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia reprehenderit velit aperiam 
            odit asperiores necessitatibus saepe molestiae ipsam dicta eos.
        </Typography>
    </motion.Box>
    <motion.Box initial={{opacity:0,y:'40%'}} whileInView={{opacity:1,y:'0'}} transition={{duration:1}} viewport={{once:true}}>
        <Box display='flex' gap='1rem'>
        {
            priceListing?.map((item)=>(
            <CardComp sx={{minWidth:'20vw',borderRadius:'1rem',':hover':{transform:'scale(1.1)',border:`1px solid ${color.greenAccent[500]}`,transition:'all',transitionTimingFunction:'ease-in-out',transitionDuration:'150ms',cursor:'pointer'}}}>
    <CardComp.Header title={<Typography sx={{fontSize:'1.5rem',fontWeight:'bold'}}>{item.title}</Typography>} sx={{textAlign:'center',textTransform:'uppercase',backgroundColor:color.primary[400]}}/>
    <CardComp.Content sx={{backgroundColor:color.primary[600],textAlign:'center'}}>
        <Typography >
            <span style={{fontSize:'2rem',fontWeight:'bold'}}>${item?.price} </span><span>/month</span></Typography>
    <PriceList list={item?.list} listStyle={{backgroundColor:color.primary[600]}} listItemStyle={{display:'flex',flexDirection:'column',gap:'0.1rem',justifyContent:'center'}}></PriceList>
    </CardComp.Content>
    <CardComp.Action sx={{display:'flex',justifyContent:'center', backgroundColor:color.primary[400],p:0}}>
<ButtonComp message="Subscribe Now" styles={{color:color.grey[100],backgroundColor:color.greenAccent[700],p:1.5,width:'100%',fontSize:'0.8rem',fontWeight:'bold',transition:'all',':hover':{
    backgroundColor:color.greenAccent[600]
}}}/>
    </CardComp.Action>
    </CardComp>
            ))
        }
        </Box>
    </motion.Box>
    
    </Box>
  )
}

const PriceList=({list,listStyle={},listItemStyle={},listTextStyle={}})=>(
    <List sx={listStyle}>
      {list.map((item) => {
        return (
          <ListItem
            key={item}
            disablePadding
            sx={listItemStyle}
          >
            
            
              <ListItemText sx={listTextStyle} primary={
                    <>
                    <Box sx={{textAlign:'center'}}>
                    <Typography>
                        Duration
                    </Typography>
                    <Typography>
                        {item?.duration} months
                    </Typography>
                    </Box>
                    </>
              
              } />
              <ListItemText primary={
                    <Box sx={{textAlign:'center'}}>
                    <Typography>
                        Personal Trainer
                    </Typography>
                    <Typography>
                        {item?.personalTrainer} person
                    </Typography>
                    </Box>
              
              } />
              <ListItemText primary={
                    <Box sx={{textAlign:'center'}}>
                    <Typography>
                    Amount of people
                    </Typography>
                    <Typography>
                        {item?.amoutOfPeople} person
                    </Typography>
                    </Box>
              
              } />
              <ListItemText primary={
                    <Box sx={{textAlign:'center'}}>
                    <Typography>
                        Number of Visits
                    </Typography>
                    <Typography>
                        {item?.numberOfVisits}
                    </Typography>
                    </Box>
              
              } />
          </ListItem>
        );
      })}
    </List>
)
export default Pricing