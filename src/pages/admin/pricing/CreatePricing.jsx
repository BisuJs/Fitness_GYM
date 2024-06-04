import { Box,Typography } from '@mui/material'
import React from 'react'
import EnhancedForm from '../../../hoc/Form'

const CreatePricing = () => {
    const handleSubmit=(formData)=>{
console.log(formData,'pricingFormData')
    }
    const postForm=[{
        id:1,
        name:'name',
        label:'Name',
        number:6,
    },
    {
        id:3,
        name:'duration',
        label:'Duration',
        type:'number',
        number:6
    },
    {
id:2,
name:'trainer',
label:'Trainer',
type:'number',
number:6,
    },{
        id:4,
        name:'amountOfPeople',
        label:'Amount Of People',
        type:'number',
        number:6
    },{
        id:5,
        name:'price',
        label:'Price',
        type:'number',
        number:6
    },]
  return (
    <Box width='80%' margin='auto'>
<Box>
    <Typography variant='h3' sx={{padding:'1rem'}}>Price Information</Typography>
</Box>
<Box>
    <EnhancedForm buttonMessage='Submit' formList={postForm} onSubmit={handleSubmit} buttonWidth='50%'/>
</Box>
    </Box>
  )
}

export default CreatePricing