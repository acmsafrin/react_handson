import { createContext, useContext, useState } from "react";

const ThemeContext=createContext(null)

export const useTheme=()=>{
    return useContext(ThemeContext);
}

export const ThemeProvider=(props)=>{

    const [mode,setMode]=useState("dark");

    function toggle(){
        if(mode==='dark'){
            setMode('light')
        }else{
            setMode('dark')
        }
    }

    return(
        <ThemeContext.Provider value={{mode,toggle}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

