import { useEffect, useState } from "react"
import { store } from "./Store";

export default function useStore(initValue){
    const [count,setCount]=useState(initValue)

    useEffect(()=>{
        store.subscribe(setCount)
    },[])

    return count;
}