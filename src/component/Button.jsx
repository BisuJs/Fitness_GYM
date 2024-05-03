import React from 'react'
import Button from '@mui/material/Button'
const ButtonComp = ({message,styles,icon=''}) => {
  console.log(icon)
  return (
    <Button sx={styles}>{message}{' '}{icon}</Button>
)
}

export default ButtonComp