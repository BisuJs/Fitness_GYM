import { Box,TextField,Typography, colors } from '@mui/material';
import React,{useEffect} from 'react';
import ButtonComp from '../../../component/Button';
import EnhancedForm from '../../../hoc/Form';
import {Link} from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { tokens } from '../../../theme';
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { getProfile, loginUser } from '../../../redux/slice/auth';
const Login = () => {
  const navigate=useNavigate();
  const theme=useTheme();
  const colors=tokens(theme.palette.mode)
  const {isLoggedIn}=useSelector(state=>state.auth);
  const dispatch=useDispatch();
  useEffect(()=>{
    if(localStorage.getItem('admin_token')){
      navigate('/admin/dashboard')
    }
  },[])
  // background: rgb(131,58,180);
  const loginList=[{
    id:1,
    number:12,
    name:'name',
    label:'name',
  },{
    id:2,
    number:12,
    name:'password',
    type:'password',
label:'Password'
  }]
  // console.log(process.env.REACT_APP_USERNAME,'username')
const generateToken=()=>{
  const list=['a','b','c','d','e','f','g','h',1,2,3,4,5,6,7,8,9,0];
  let token='';
  for(let i=0;i<=15;i++){
    const singleChar=list[Math.ceil((list.length-1)* Math.random())]
token+=singleChar
  }
  return {token}
}
// console.log(generateToken(),'token');
  const handleSubmit=(formData)=>{
console.log(formData,'formdata');
    if(formData){
      dispatch(loginUser(formData));
dispatch(getProfile('http://localhost:8080/adminlogin',formData));

    }
    console.log(isLoggedIn,'isloggedin')


    // console.log(process.env.REACT_APP_USERNAME)
    // console.log(formData.username===process.env.REACT_APP_USERNAME,'username');
    // console.log(formData.password===process.env.REACT_APP_PASSWORD,'password')
    // if(formData && formData.username===process.env.REACT_APP_USERNAME && formData.password===process.env.REACT_APP_PASSWORD){
    //   localStorage.setItem('admin',JSON.stringify(generateToken()))
    //   navigate('/admin/dashboard')
    // }
  }
  if(isLoggedIn){
    navigate('/admin/dashboard');
  }
  return (
    <Box display='flex' flexDirection={'column'} width='100vw' height='100vh' justifyContent={'center'} alignItems='center' >
        <Box width='20vw' height='35vh' borderRadius={'10px'} backgroundColor={colors.primary[400]} display='flex' flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
        <Box component='div' paddingBlock='1rem' display='flex' justifyContent={'center'} alignItems={'center'}>
        <Link to="/" style={{textDecoration:'none'}}>

        <Typography variant='h1' sx={{fontSize:'2rem',fontWeight:'bold',textTransform:'uppercase',letterSpacing:'0.1rem',display:'flex',background: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)',backgroundClip:'text',color:'transparent'}}>
          Fit
          <Typography variant='h1' sx={{fontSize:'2rem',fontWeight:'bold',textTransform:'uppercase', letterSpacing:'0.1rem' }}>ness</Typography>
          </Typography>
          </Link>
      </Box>
        <EnhancedForm style={{display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center'}} buttonMessage='Login' buttonWidth='100%' formList={loginList} onSubmit={handleSubmit} />
        {/* <Box component='form' display='flex' flexDirection={'column'} justifyContent={'center'} alignItems={'center'} >
<TextField id="outlined-basic" label="Outlined" variant="outlined" />
<TextField id="outlined-basic" label="Outlined" variant="outlined" />
<ButtonComp message='login' sx={{color:'white'}}></ButtonComp>
</Box> */}
</Box>
    </Box>
  )
}

export default Login;