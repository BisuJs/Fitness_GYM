import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Delete, Edit } from '@mui/icons-material';
import { Typography,Box, colors, useTheme } from '@mui/material';
import { tokens } from '../theme';

// interface Column {
//   id: 'name' | 'code' | 'population' | 'size' | 'density';
//   label: string;
//   minWidth?: number;
//   align?: 'right';
//   format?: (value: number) => string;
// }


// interface Data {
//   name: string;
//   code: string;
//   population: number;
//   size: number;
//   density: number;
// }

export default function TableComp({columns=[],rows=[]}) {
  
  // const columns = [
  //   { id: 'id', label: 'ID', minWidth: 170 },
  //   { id: 'title', label: 'Title', minWidth: 100 },
  //   {
  //     id: 'description',
  //     label: 'Description',
  //     minWidth: 170,
  //     align: 'center',
  //     format: (value) => value.toLocaleString('en-US'),
  //   },
  //   {
  //     id: 'postBy',
  //     label: 'Post By',
  //     minWidth: 170,
  //     align: 'center',
  //     format: (value) => value.toLocaleString('en-US'),
  //   },
  //   {
  //     id: 'postStatus',
  //     label: 'Post Status',
  //     minWidth: 170,
  //     align: 'center',
  //     format: (value) => value.toFixed(2),
  //   },
  //   {
  //     id:'image',
  //     label:'Image',
  //     minWidth:170,
  //   },
  //   {
  //     id:'actions',
  //     label:'Actions',
  //     minWidth:170,
  //     render:(action)=>(
  //       action===true && <Box display='flex' columnGap={'0.25rem'}>
  //         <Edit sx={{color:colors.greenAccent[500],cursor:'pointer'}} onClick={()=>handleEdit()}/>
  //         <Delete sx={{color:colors.redAccent[500],cursor:'pointer'}} onClick={()=>handleDelete()}/>
  //       </Box>
  //     )
  //   }
  // ];
  
// function createData(
//   id,
//   title,
//   description,
//   postStatus,
//   postBy,
//   image,
//   actions,
// ){
//   return {id, title, description, postStatus, postBy, image,actions };
// }

// const rows = [
//   createData(1,'Hello', 'description jlksjflsjfdskl jfklsjfsklf  jlksjflksdf', 'active', 'admin','image','action'),
//   createData('China', 'CN', 1403500365, 9596961),
//   createData('Italy', 'IT', 60483973, 301340),
//   createData('United States', 'US', 327167434, 9833520),
//   createData('Canada', 'CA', 37602103, 9984670),
//   createData('Australia', 'AU', 25475400, 7692024),
//   createData('Germany', 'DE', 83019200, 357578),
//   createData('Ireland', 'IE', 4857000, 70273),
//   createData('Mexico', 'MX', 126577691, 1972550),
//   createData('Japan', 'JP', 126317000, 377973),
//   createData('France', 'FR', 67022000, 640679),
//   createData('United Kingdom', 'GB', 67545757, 242495),
//   createData('Russia', 'RU', 146793744, 17098246),
//   createData('Nigeria', 'NG', 200962417, 923768),
//   createData('Brazil', 'BR', 210147125, 8515767),
// ];

  const theme=useTheme();
  const colors=tokens(theme.palette.mode)
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight:'auto' }}>
        <Table stickyHeader aria-label="sticky table" sx={{backgroundColor:colors?.primary[500]}}>
          <TableHead>
            <TableRow >
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth,fontWeight:'600',fontSize:'0.9rem',backgroundColor:colors.greenAccent[600] }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns?.map((column) => {
                      const value = row[column.id];
                      return (
                        column?.id !=='actions' ? <TableCell key={column.id} align={column.align}>
                        
                        {value}
                    </TableCell>:<TableCell key={column.id} align={column.align}>
                        
                        {column?.render(true)}
                        {console.log(column.render(true),'columnId')}
                    </TableCell>
                        
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{backgroundColor:colors?.primary[500]}}
      />
    </Paper>
  );
}
