import React from 'react'
import FormComponent from './FormComponent'
import {Box} from '@mui/material'
const Form = ({formData,errors,handleChange,formList}) => {
  return (
    <>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '100%' },
        
        
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor:colors.grey[100] , // Change the border color when focused
          },
          '& .MuiInputLabel-outlined.Mui-focused': {
            color: 'white', // Change label color when focused
          },
        
      }}
      noValidate
      autoComplete="off"
    >
        <Grid container spacing={{ xs: 2, md: 3 }} sx={{flexGrow:1}}>
   {formList?.map(item=>(
    <Grid md={item?.number} xs={item?.number} spacing={{xs:2,md:4}} sx={{padding:'0.5rem'}}>
    <TextField id={item?.name} label={item?.label} name={formData[item?.name] || ''} onChange={handleChange} variant="outlined" {...item?.rows} fullWidth/>
    {errors[item?.name] && <p>{errors[item?.name]}</p>}
    </Grid>
))}
</Grid>
     <ButtonComp message='Reply' styles={{backgroundColor:colors.greenAccent[500],maxWidth:'max-content',transition:"all",transitionTimingFunction:'ease-in-out',transitionDuration:'150ms',':hover':{
      backgroundColor:colors.greenAccent[400]
     }}}></ButtonComp>
    </Box>
        {/* <div>
            <label htmlFor="name">Name</label>
            <input type="text" name='name' value={formData.name || ''} onChange={handleChange}/>
        {errors?.name && <p>{errors.name}</p>}

        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type="password" name='password' value={formData.password ||''} onChange={handleChange} />
            {errors?.password && <p>{errors.password}</p>}
        </div>
        <button type='submit'>Submit</button> */}
        </>
  )
}

const EnhancedForm=FormComponent(Form);
export default EnhancedForm;