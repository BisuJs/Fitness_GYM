import React from 'react'
import FormComponent from './FormComponent'
import {Box,FormControl,InputLabel,InputAdornment,IconButton,OutlinedInput,TextField,Grid, useTheme} from '@mui/material';
import ButtonComp from '../component/Button';
import { tokens } from '../theme';
import { Visibility,VisibilityOff } from '@mui/icons-material';
import { useForm } from 'react-hook-form';
const Form = React.memo(({formData,errors,handleChange,handleSubmit,formList,buttonMessage,buttonWidth,fields,register,remove,append,Controller,control,...rest}) => {
  const theme=useTheme();
  const colors=tokens(theme.palette.mode);
  
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  // const InputElement = ({item}) => {
  //   {console.log(formData,'itemName')}
  //   switch (item.name) {
  //     case 'password':
  //       return  <FormControl sx={{ }} variant="outlined" fullWidth>
  //       <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
  //       <OutlinedInput
  //         id="outlined-adornment-password"
  //         type={showPassword ? 'text' : 'password'}
  //         name={item?.name} value={formData[item?.name]} onChange={handleChange} 
  //         endAdornment={
  //           <InputAdornment position="end">
  //             <IconButton
  //               aria-label="toggle password visibility"
  //               onClick={handleClickShowPassword}
  //               onMouseDown={handleMouseDownPassword}
  //               edge="end"
  //             >
  //               {showPassword ? <VisibilityOff /> : <Visibility />}
  //             </IconButton>
  //           </InputAdornment>
  //         }
  //         label="Password"
  //       />
  //     </FormControl>
      
  //     default:
  //       return     <TextField id={item?.name} label={item?.label} name={item?.name} value={formData[item?.name]} onChange={handleChange}  variant="outlined" {...item?.rows} fullWidth/>

  //   }
  // };
  return (
    <>
        <Box
      component="form"
      {...rest}
    
      sx={{
        '& > :not(style)': { m: 1, width: '100%' },
        
        
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor:colors.grey[100] , // Change the border color when focused
          },
          '& .MuiInputLabel-outlined.Mui-focused': {
            color: 'white', // Change label color when focused
          }
        
      }}
      noValidate
      autoComplete="off"
    >
        <Grid container spacing={{ xs: 2, md: 3 }} sx={{flexGrow:1}}>
   {formList?.map(item=>(
     <Grid md={item?.number} key={item?.id} xs={item?.number} spacing={{xs:2,md:4}} sx={{padding:'0.5rem'}}>
  <TextField id={item?.name} label={item?.label} name={item?.name} value={formData[item?.name]} type={item?.type} onChange={handleChange}  variant="outlined" {...item?.rows} fullWidth />
  
    {/* <InputElement item={item}/> */}
    {errors[item?.name] && <p>{errors[item?.name]}</p>}
    </Grid>
   
   
))}
{fields && 
  <>
  <Box display='flex' flexDirection={'column'}>
  <ul style={{display:'flex', flexDirection:'column',rowGap:'1rem',padding:'0'}}>
        {fields.map((item, index) => (
          <li key={item.id} style={{listStyleType:'none', display:'flex',width:'80vw',columnGap:'1rem',paddingInline:'0.5rem'}}>
            <TextField id={item?.name} name={item?.name} type={item?.type} onChange={handleChange} variant='outlined' {...item?.rows} fullWidth   {...register(`test.${index}.firstName`)} />
            <TextField id={item?.name} name={item?.name} type={item?.type} onChange={handleChange} variant='outlined' {...item?.rows} fullWidth   {...register(`test.${index}.lastName`)} />

            {/* <Controller 
              render={({ field }) => <TextField {...field} />}
              name={`test.${index}.lastName`}
              control={control}
            /> */}
            <ButtonComp type="button" message='Delete' onClick={() => remove(index)} sx={{background:'#ee1111',border:'none',padding:'0.5rem',borderRadius:'5px',color:'#cccccc',fontWeight:'600',cursor:'pointer',':hover':{
              background:'#dd1111'
            },transition:'all', duration:'150ms',transitionTimingFunction:'ease-in-out'}}></ButtonComp>
          </li>
        ))}
      

      </ul>
      <ButtonComp
        type="button"
        message='Add'
        onClick={() => append({ firstName: "bill", lastName: "luo" })}
        sx={{width:'max-content',background:colors.greenAccent[600],border:'none',padding:'0.5rem',borderRadius:'5px',color:colors.grey[800],fontWeight:'600',cursor:'pointer',':hover':{
          background:colors.greenAccent[700],color:colors.grey[200]
        },transition:'all', duration:'150ms',transitionTimingFunction:'ease-in-out'}}
      >
      </ButtonComp>
      </Box>
      </>
  }
</Grid>
<Box paddingInline='8px'>
     <ButtonComp message={buttonMessage} styles={{backgroundColor:colors.greenAccent[500],width:buttonWidth,transition:"all",transitionTimingFunction:'ease-in-out',transitionDuration:'150ms',':hover':{
      backgroundColor:colors.greenAccent[400]
     }}} onClick={handleSubmit}></ButtonComp>
     </Box>
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
});

const EnhancedForm=FormComponent(Form);
export default EnhancedForm;