import { Box,Typography } from '@mui/material'
import React from 'react'
import EnhancedForm from '../../../hoc/Form'
import { useFieldArray, useForm,Controller } from 'react-hook-form'
const CreateService = () => {
    const {control,register}=useForm({defaultValues:{
        class:[{firstName:'', lastName:''}],
}});
    const {fields,append,remove,prepand}=useFieldArray({
        control,
        name:'class',
        
    })
    const handleSubmit=(formData)=>{
console.log(formData,'postFormData')
    }
    const postForm=[{
        id:1,
        name:'title',
        label:'Title',
        number:6,
    },
    {
        id:3,
        name:'postBy',
        label:'Post By',
        number:6
    },
    {
id:2,
name:'description',
label:'Description',
rows:{rows:4,multiline:true},
number:12,
    },{
        id:4,
        name:'postStatus',
        label:'Post Status',
        number:6
    },{
        id:5,
        name:'image',
        label:'Image',
        number:6
    },]
  return (
    <Box width='80%' margin='auto'>
<Box>
    <Typography variant='h3' sx={{padding:'1rem'}}>Service Information</Typography>
</Box>
<Box>
    <EnhancedForm buttonMessage='Submit' formList={postForm} onSubmit={handleSubmit} buttonWidth='50%' fields={fields} append={append} remove={remove} register={register}Controller={Controller} control={control}/>
</Box>
    </Box>
  )
}

export default CreateService