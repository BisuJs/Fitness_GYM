import React from 'react'
import {Box} from '@mui/material'
import SideBar from './Sidebar'
import { Outlet } from 'react-router-dom'
const Admin = () => {
  return (
    <Box display='flex' columnGap='1rem'>
<SideBar/>
<Outlet/>
    </Box>
  )
}

export default Admin