import React, { useState } from 'react';
import { createContext,useContext } from 'react';
import { createTheme } from '@mui/material';
const ThemeContext=createContext()
const lightTheme=createTheme({
    palette: {
        type: 'light',
        primary: {
          main: '#eee', 
        },
        secondary: {
          main: '#222', 
        }, 
    }
})
const darkTheme=createTheme({
    palette:{
        type:'dark',
        primary:{
            main:'#222'
        },
        secondary:{
            main:'#eee'
        }
    }
})

export const ThemeProvider=({children})=>{
    const [themeType,setThemeType]=useState('light')
    const toogleType=()=>{
        setThemeType(themeType==='light'?'dark':'light')
        console.log(themeType,'toogleType')
    }
    const theme=themeType==='light'?lightTheme:darkTheme;
    return(
    <ThemeContext.Provider value={{themeType,toogleType,theme}}>
    {children}
    </ThemeContext.Provider>
    )
    
}
export const useThemeContext=()=>useContext(ThemeContext)