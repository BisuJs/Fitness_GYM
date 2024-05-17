import React from 'react'
import ButtonComp from '../../../component/Button'
import {Box,Typography, useTheme} from '@mui/material'
import { tokens } from '../../../theme';
import TableComp from '../../../component/Table';
import { Edit,Delete } from '@mui/icons-material';
const AdminPricing = () => {
    const theme=useTheme();
    const colors=tokens(theme.palette.mode);
    const handleEdit=()=>{

    }
    const handleDelete=()=>{
  
    }
    function createData(
  id,
  name,
  duration,
  trainer,
  amountOfPeople,
  price,
  actions,
){
  return {id, name, duration, trainer, amountOfPeople, price,actions };
}

const rows = [
  createData(1,'Basic', 12, 1,1,20,'action'),
  createData(2,'Standard', 12, 1,1,30,'action'),
  createData(3,'Premium', 12, 1,1,50,'action'),
];

    const columns = [
    { id: 'id', label: 'ID', minWidth: 170 },
    { id: 'name', label: 'Name', minWidth: 100 },
    {
      id: 'duration',
      label: 'Duration',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'trainer',
      label: 'Trainer',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'amountOfPeople',
      label: 'Amount Of People',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toFixed(2),
    },
    {
      id:'price',
      label:'Price',
      minWidth:170,
    },
    {
      id:'actions',
      label:'Actions',
      minWidth:170,
      render:(action)=>(
        action===true && <Box display='flex' columnGap={'0.25rem'}>
          <Edit sx={{color:colors.greenAccent[500],cursor:'pointer'}} onClick={()=>handleEdit()}/>
          <Delete sx={{color:colors.redAccent[500],cursor:'pointer'}} onClick={()=>handleDelete()}/>
        </Box>
      )
    }
  ];
  return (
    <Box width='100%' paddingInline={'2rem'}>
        <Box display='flex' justifyContent='space-between' alignItems='center' paddingTop={'1rem'} paddingBottom="2rem">
            <Typography variant='h3' sx={{fontWeight:'700'}}>Pricing</Typography>
            <ButtonComp message='Add Pricing' sx={{color:'white',fontWeight:'600',backgroundColor:colors?.greenAccent[600],padding:'0.5rem',':hover':{
                backgroundColor:colors?.greenAccent[700]
            }}}/>
        </Box>

        <TableComp columns={columns} rows={rows}/>
    </Box>
  )
}

export default AdminPricing;