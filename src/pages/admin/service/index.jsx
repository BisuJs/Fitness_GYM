import React from 'react'
import ButtonComp from '../../../component/Button'
import {Box,Typography, useTheme} from '@mui/material'
import { tokens } from '../../../theme';
import TableComp from '../../../component/Table';
import { Edit,Delete } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
const AdminServicing = () => {
    const theme=useTheme();
    const navigate=useNavigate();
    const colors=tokens(theme.palette.mode);
    const handleEdit=()=>{

    }
    const handleDelete=()=>{
  
    }
    function createData(
  id,
  title,
  description,
  postStatus,
  postBy,
  image,
  actions,
){
  return {id, title, description, postStatus, postBy, image,actions };
}

const rows = [
  createData(1,'Hello', 'description jlksjflsjfdskl jfklsjfsklf  jlksjflksdf', 'active', 'admin','image','action'),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
];

    const columns = [
    { id: 'id', label: 'ID', minWidth: 170 },
    { id: 'title', label: 'Title', minWidth: 100 },
    {
      id: 'description',
      label: 'Description',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'postBy',
      label: 'Post By',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'postStatus',
      label: 'Post Status',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toFixed(2),
    },
    {
      id:'image',
      label:'Image',
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
            <Typography variant='h3' sx={{fontWeight:'700'}}>Service</Typography>
            <ButtonComp message='Add Service' onClick={()=>navigate('/admin/service/create')} sx={{color:'white',fontWeight:'600',backgroundColor:colors?.greenAccent[600],padding:'0.5rem',':hover':{
                backgroundColor:colors?.greenAccent[700]
            }}}/>
        </Box>

        <TableComp columns={columns} rows={rows}/>
    </Box>
  )
}

export default AdminServicing