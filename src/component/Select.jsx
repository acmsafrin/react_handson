import { createContext, useContext, useEffect, useState } from "react";

const SelectContext=createContext(null)

export const useSelect=()=>{
    return useContext(SelectContext);
}

export const SelectProvider=(props)=>{

    const [value,setValue]=useState('')

    useEffect(()=>{
        setValue(props.default)
    },[])

    return(
        <SelectContext.Provider value={{value,setValue}}>
            {props.children}
        </SelectContext.Provider>
    )
}

