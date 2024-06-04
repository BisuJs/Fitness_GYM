import axios from 'axios';
import { authHeader } from '../_helper/auth';
const headInfo=()=>{
    return {headers:{authorization:authHeader()}}
}
// for login
export const getAxios=async(url)=>{
  const result=await axios.get(url);
  console.log('resulget',result);
  const response=await result.json();
  return response
}
export const postAxios=async(url,data)=>{
    console.log(data,'postData')
    const result=await axios.post(url,data);
    // console.log(result,'postAxiosResult');
    const response=await result.data;
    // console.log(response,'postAxiosResponse');
    return response;
}
export const putAxios=async(url,data)=>{
const result=await axios.put(url,JSON.stringfy(data));
const response=await result.json();
return response;
}
export const deleteAxios=async(url)=>{
    const result=await axios.delete(url);
    const response=await result.json();
    return response;
}