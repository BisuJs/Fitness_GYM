import React,{useState} from 'react';
import { styled, alpha } from '@mui/material/styles';
import {ListItemButton,ListItemText,List,Collapse, Typography,ListItem,ListItemIcon} from '@mui/material';
import { ExpandLess,ExpandMore ,StarBorder} from '@mui/icons-material';
import { useTheme } from '@emotion/react';
import { tokens } from '../theme';
export default function Dropdown({title,dropdownList}) {
  const theme=useTheme();
  const colors=tokens(theme.palette.mode);
  const [open,setOpen]=useState(false);

  const handleOpen=()=>{
    setOpen(!open);
  }

  return (
    <div>

        <ListItemText primary={<Typography sx={{fontSize:'1rem',fontWeight:'600',display:'flex',alignItems:'center',color:colors.grey[100]}}>
            {title} {open ? <ExpandLess /> : <ExpandMore />}

        </Typography>} onClick={handleOpen}/>
        
      <Collapse in={open} timeout="auto" unmountOnExit>
        
      <List component="div" disablePadding>

      {dropdownList?.map(item=>(
        <ListItemButton >
              <ListItemText primary={<Typography sx={{fontSize:'1rem',fontWeight:'600',color:colors?.grey[100]}}>{item.name}</Typography>}/>
          
          </ListItemButton>
       
      ))}
          
       </List>
      </Collapse>
     
      
    </div>
  );
}
