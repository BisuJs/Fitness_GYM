import { Box,Button } from "@mui/material";
import { useState } from "react";
import ButtonComp from "./Button";
import {useTheme} from "@mui/material";
import { tokens } from "../theme";
const Pagination=({total=60,page=1,perPage=4,onPageChange=null})=>{
    const [active,setActive]=useState(page);
    console.log(active,'active')
const theme=useTheme();
const colors=tokens(theme.palette.mode)
    return(
       <Box display='flex' color='white' padding='1rem' alignItems={'center'}>
         <ButtonComp message={'<<'} styles={{width:'3rem',height:'3rem',backgroundColor:active===1?colors.grey[500]:colors.grey[100],borderRadius:'50%',fontSize:'1rem',':hover':{
            backgroundColor:colors.grey[200]
        }}} onClick={()=>{
            setActive((prev)=>active<=1?1:prev-1)
           
        }} disabled={active===1 && true}></ButtonComp>
         { 
            total/perPage>=4 && 
        <>
        
          <ButtonComp  message={'...'} styles={{width:'3.5rem',height:'3.5rem',color:colors.grey[100],fontSize:'1.5rem'}}></ButtonComp>
        </>
    
      }
        {Array.from({length:Math.ceil(total/perPage)<=4 ? Math.ceil(total/perPage):4},(_,i)=>
    active> 4 ? active-(3-i):i+1    
    ).map((v)=>(
            // <Box width='3.5rem' height='3.5rem'>
            <ButtonComp key={v} onClick={()=>{
                setActive(v);
                onPageChange && onPageChange(v)
            }} styles={{width:'3rem',height:'3rem',padding:'0',margin:'0',fontSize:'1rem',backgroundColor:active===v && colors.greenAccent[600],borderRadius:'50%',color:colors.grey[100],':hover':{
                backgroundColor:active===v && colors.greenAccent[500]
            }}} message={v}>
            </ButtonComp>
          
            // </Box>
        ))}
         { total/perPage>5 &&
        <>
          <ButtonComp  message={'...'} styles={{width:'3.5rem',height:'3.5rem',borderRadius:'50%',color:colors.grey[100],fontSize:'1.5rem'}}></ButtonComp>
        </>
      }
        <ButtonComp message={'>>'} styles={{width:'3rem',height:'3rem',backgroundColor:active===Math.ceil(total/perPage)-1?colors.grey[500]:colors.grey[100],borderRadius:'50%',fontSize:'1rem',':hover':{
            backgroundColor:colors.grey[200]
        }}} onClick={()=>{
            setActive((prev)=>active===(Math.ceil(total/perPage)-1)?(Math.ceil(total/perPage)-1):prev+1)}} disabled={active===Math.ceil(total/perPage)-1 && true}></ButtonComp>

       </Box>
    )
}

export default Pagination;



// import * as React from 'react';
// import TablePagination from '@mui/material/TablePagination';

// export default function TablePaginationDemo() {
//   const [page, setPage] = React.useState(2);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);

//   const handleChangePage = (
//     event: React.MouseEvent<HTMLButtonElement> | null,
//     newPage: number,
//   ) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (
//     event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//   ) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   return (
//     <TablePagination
//       component="div"
//       count={100}
//       page={page}
//       onPageChange={handleChangePage}
//       rowsPerPage={rowsPerPage}
//       onRowsPerPageChange={handleChangeRowsPerPage}
//     />
//   );
// }