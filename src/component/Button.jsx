import React from 'react'
import Button from '@mui/material/Button'
const ButtonComp = ({message,styles,icon='',...rest}) => {
  return (
    <Button sx={styles} {...rest}>{message}{' '}{icon}</Button>
)
}

export default ButtonComp