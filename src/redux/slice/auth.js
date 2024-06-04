import { createSlice } from "@reduxjs/toolkit";
import {postAxios } from "../../api";
import { setToken } from "../../_helper/auth";
import axios from "axios";
export const authSlice=createSlice({
    name:'user',
    initialState:{
        isLoading:false,
        isLoggedIn:false,
        user:null
    },
    reducers:{
        setUser:(state,action)=>{
        state.user=action.payload;
        },
        setLoading:(state,action)=>{
            state.isLoading=action.payload;
        },
        setLoggedIn:(state,action)=>{
            state.isLoggedIn=action.payload;
        }
    }
})
const {setUser,setLoading,setLoggedIn}=authSlice.actions;

export default authSlice.reducer;

export const loginUser=(data)=>async(dispatch)=>{
    try {
        dispatch(setLoading(true));
        const response=await axios.post('http://localhost:8080/adminlogin',data);
        console.log(response?.data?.token,'loginuserResponse')
        if(response?.data?.token){
            dispatch(setLoggedIn(true));
            setToken(response?.data?.token);
        }
        dispatch(setLoading(false))
    } catch (error) {
        console.log(error);
        dispatch(setLoading(false))
    }
}
export const getProfile=(url,data)=>async(dispatch)=>{
    try {
        dispatch(setLoading(true));
        const response=await postAxios(url,data);
        console.log(response,'getprofileresponse')
        if(response?.result) dispatch(setLoggedIn(true));

        dispatch(setUser(response?.result));
        dispatch(setLoading(false))
    } catch (error) {
        console.log(error);
        dispatch(setLoading(false))
    }
}