import React from 'react'
import Link from '@mui/material/Link'
import Typography  from '@mui/material/Typography'

const MenuItem = ({message,path,sx='',setSelected}) => {

  return (
<Link href={path} sx={{textDecoration:'none'}} onClick={()=>setSelected(message)}>
   <Typography sx={sx}>
{message}
  </Typography>
</Link>

  )
}

export default MenuItem